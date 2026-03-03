using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;
using ExpenseControl.Application.Responses.Category;
using ExpenseControl.Domain.Models;

namespace ExpenseControl.Application.Interfaces;
/// <summary>
/// Contrato para implementação do serviço de Categorias
/// </summary>
public interface ICategoryService
{
    Task<IEnumerable<CategoryResponse>> GetCategories();
    Task<CategoryTotal> GetCategory(Guid id);
    Task<CategoryTotalsResponse> GetCategoryTotal();
    Task CreateCategory(CreateCategoryRequest request);
}