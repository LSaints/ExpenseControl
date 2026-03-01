
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Application.Responses;

namespace ExpenseControl.Application.Interfaces;
/// <summary>
/// Contrato para implementação do serviço de Transação
/// </summary>
public interface ITransactionService
{
    Task<IEnumerable<TransactionResponse>> GetAllTransactions();
    Task<TransactionResponse> GetTransaction(Guid id);
    Task CreateTransaction(Guid userId, CreateTransactionRequest request);
}