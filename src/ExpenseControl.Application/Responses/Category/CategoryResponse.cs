using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Responses;

public record CategoryResponse(Guid Id, string Description, CategoryPurpose Purpose);