using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Requests.Transaction;

/// <summary>
/// DTO para criação de Transação
/// </summary>
/// <param name="CategoryId">Identificador de categoria</param>
/// <param name="Description">Descrição de categoria</param>
/// <param name="Amount">Valor de categoria</param>
/// <param name="Type">Tipo de categoria</param>
public record CreateTransactionRequest(Guid CategoryId, string Description, decimal Amount, TransactionType Type);