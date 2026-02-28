using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Requests.Transaction;

public record CreateTransactionRequest(Guid CategoryId, string Description, decimal Amount, TransactionType Type);