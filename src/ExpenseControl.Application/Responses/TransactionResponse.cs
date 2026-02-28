using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Responses;

public record TransactionResponse(
    Guid Id,
    Guid UserId, 
    Guid CategoryId, 
    string Description, 
    decimal Amount, 
    TransactionType Type);