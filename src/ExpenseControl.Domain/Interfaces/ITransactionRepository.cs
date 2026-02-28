using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Domain.Interfaces;
// Contrato para implementação do repositorio de Transação
public interface ITransactionRepository
{
    Task<IEnumerable<Transaction>> GetAllTransactions();
    Task<Transaction?> GetTransaction(Guid id);
    Task CreateTransaction(Transaction transaction);
}