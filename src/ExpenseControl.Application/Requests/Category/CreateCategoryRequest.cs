using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Requests.Category;

public record CreateCategoryRequest(string Description, CategoryPurpose Purpose);