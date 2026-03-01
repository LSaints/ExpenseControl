using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Domain.Interfaces;
/// <summary>
/// Contrato para implementação do repositorio de Transação
/// </summary>
public interface ITransactionRepository
{
    Task<IEnumerable<Transaction>> GetAllTransactions();
    Task<Transaction?> GetTransaction(Guid id);
    Task CreateTransaction(Transaction transaction);
}