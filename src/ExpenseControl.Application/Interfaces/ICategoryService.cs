using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;

namespace ExpenseControl.Application.Interfaces;
/// <summary>
/// Contrato para implementação do serviço de Categorias
/// </summary>
public interface ICategoryService
{
    Task<IEnumerable<CategoryResponse>> GetCategories();
    Task<CategoryResponse> GetCategory(Guid id);
    Task CreateCategory(CreateCategoryRequest request);
}