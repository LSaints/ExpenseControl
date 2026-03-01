using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;
using ExpenseControl.Application.Responses.Category;

namespace ExpenseControl.Application.Interfaces;
/// <summary>
/// Contrato para implementação do serviço de Categorias
/// </summary>
public interface ICategoryService
{
    Task<IEnumerable<CategoryResponse>> GetCategories();
    Task<CategoryResponse> GetCategory(Guid id);
    Task<CategoryTotalsResponse> GetCategoryTotal();
    Task CreateCategory(CreateCategoryRequest request);
}