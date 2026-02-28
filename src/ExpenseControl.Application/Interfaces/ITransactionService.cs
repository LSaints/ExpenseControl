
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Application.Responses;

namespace ExpenseControl.Application.Interfaces;

public interface ITransactionService
{
    Task<IEnumerable<TransactionResponse>> GetAllTransactions();
    Task<TransactionResponse> GetTransaction(Guid id);
    Task CreateTransaction(Guid userId, CreateTransactionRequest request);
}