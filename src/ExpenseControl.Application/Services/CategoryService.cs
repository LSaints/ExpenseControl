using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;
using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Exceptions;
using ExpenseControl.Domain.Interfaces;

namespace ExpenseControl.Application.Services;

public class CategoryService(ICategoryRepository repository) : ICategoryService
{
    public async Task<IEnumerable<CategoryResponse>> GetCategories()
    {
        var categories = await repository.GetAllCategories();
        var response = categories.Select(category => new CategoryResponse(category.Id, category.Description, category.Purpose));
        return response;
    }

    public async Task<CategoryResponse> GetCategory(Guid id)
    {
        var category = await repository.GetCategory(id);
        if (category is null) throw new NotFound("Categoria não encontrada.");
        var response = new CategoryResponse(category.Id, category.Description, category.Purpose);
        return response;
    }

    public async Task CreateCategory(CreateCategoryRequest request)
    {
        var category = new Category(request.Description, request.Purpose);
        await repository.CreateCategory(category);
    }
}