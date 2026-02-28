using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;

namespace ExpenseControl.Application.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<CategoryResponse>> GetCategories();
    Task<CategoryResponse> GetCategory(Guid id);
    Task CreateCategory(CreateCategoryRequest request);
}