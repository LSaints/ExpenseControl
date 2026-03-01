using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Responses.Category;

public record CategoryResponse(Guid Id, string Description, CategoryPurpose Purpose);