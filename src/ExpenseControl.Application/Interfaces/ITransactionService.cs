
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Application.Interfaces;

public interface ITransactionService
{
    Task<IEnumerable<Transaction>> GetAllTransactions();
    Task<Transaction> GetTransaction(Guid id);
    Task CreateTransaction(Guid userId, CreateTransactionRequest request);
}