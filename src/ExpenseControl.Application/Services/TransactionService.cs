using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Application.Responses;
using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Enums;
using ExpenseControl.Domain.Exceptions;
using ExpenseControl.Domain.Interfaces;

namespace ExpenseControl.Application.Services;
/// <summary>
/// Implementação do contrato para o serviço de Transação
/// </summary>
/// <param name="repository">contrato de repositorio</param>
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
        
        if (user is null)
            throw new NotFound("Usuário não encontrado.");
        
        if (category is null)
            throw new NotFound("Categoria não encontrada.");

        if (!user.IsOfLegalAge() && request.Type is TransactionType.Income)
            throw new InvalidOperationException("Usuário menor de idade. Apenas despesas são permitidas.");

        if (request.Type is TransactionType.Expense && category.Purpose is CategoryPurpose.Income)
            throw new InvalidOperationException("Transação do tipo despesa não permite categoria com finalidade receita.");
        
        if (request.Type is TransactionType.Income && category.Purpose is CategoryPurpose.Expense)
            throw new InvalidOperationException("Transação do tipo receita não permite categoria com finalidade despesa.");

        var transaction = new Transaction(userId, request.CategoryId, request.Description, request.Amount, request.Type);
        await repository.CreateTransaction(transaction);
    }
}