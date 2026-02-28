using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Application.Responses;
using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Enums;
using ExpenseControl.Domain.Exceptions;
using ExpenseControl.Domain.Interfaces;

namespace ExpenseControl.Application.Services;

public class TransactionService(
    ITransactionRepository repository, 
    IUserRepository userRepository, 
    ICategoryService categoryService
    ) : ITransactionService
{
    public async Task<IEnumerable<TransactionResponse>> GetAllTransactions()
    {
        var transactions = await repository.GetAllTransactions();
        var response = transactions.Select(t => 
            new TransactionResponse(t.Id, t.UserId, t.CategoryId, t.Description, t.Amount, t.Type));
        return response;
    }

    public async Task<TransactionResponse> GetTransaction(Guid id)
    {
        var transaction = await repository.GetTransaction(id);
        if (transaction is null)
            throw new NotFound("Transação não encontrada.");
        
        var response = new TransactionResponse(
            transaction.Id,
            transaction.UserId, 
            transaction.CategoryId, 
            transaction.Description, 
            transaction.Amount, 
            transaction.Type);
        
        return response;
    }

    public async Task CreateTransaction(Guid userId, CreateTransactionRequest request)
    {
        var user = await userRepository.GetUserById(userId);
        var category = await categoryService.GetCategory(request.CategoryId); 
        
        if (user == null)
            throw new NotFound("usuario não encontrado.");
        
        if (category == null)
            throw new NotFound("categoria não encontrada.");

        if (!user.IsOfLegalAge() && request.Type is TransactionType.Income)
            throw new InvalidOperationException("usuario menor de idade, apenas despesas deverão ser aceitas.");

        if (request.Type is TransactionType.Expense && category.Purpose is CategoryPurpose.Income)
            throw new InvalidOperationException("O tipo da transação é despesa, não poderá utilizar uma categoria que tenha a finalidade receita.");
        
        if (request.Type is TransactionType.Income && category.Purpose is CategoryPurpose.Expense)
            throw new InvalidOperationException("O tipo da transação é receita, não poderá utilizar uma categoria que tenha a finalidade despesa.");

        var transaction = new Transaction(userId, request.CategoryId, request.Description, request.Amount, request.Type);
        await repository.CreateTransaction(transaction);
    }
}