using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;
using ExpenseControl.Application.Responses.Category;
using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Exceptions;
using ExpenseControl.Domain.Interfaces;

namespace ExpenseControl.Application.Services;
/// <summary>
/// Implementação do contrato para o serviço de Category
/// </summary>
/// <param name="repository">contrato de repositorio</param>
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

    public async Task<CategoryTotalsResponse> GetCategoryTotal()
    {
        var categories = await repository.GetCategoriesTotals();
        var totals = categories.Select(c =>
                new CategoryTotalResponse(c.Description, c.TotalExpenses, c.TotalIncomes));
        
        
        var summary = new CategorySummaryResponse(totals?.Sum(t => t.TotalExpenses) ?? 0, totals?.Sum(t => t.TotalIncomes) ?? 0);
        var response = new CategoryTotalsResponse(totals, summary);
        return response;
    }

    public async Task CreateCategory(CreateCategoryRequest request)
    {
        var category = new Category(request.Description, request.Purpose);
        await repository.CreateCategory(category);
    }
}