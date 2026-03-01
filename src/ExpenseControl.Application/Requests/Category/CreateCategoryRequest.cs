using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Application.Requests.Category;

/// <summary>
/// DTO para criação de categoria
/// </summary>
/// <param name="Description">Descrição de categoria</param>
/// <param name="Purpose">Finalidade de categoria</param>
public record CreateCategoryRequest(string Description, CategoryPurpose Purpose);