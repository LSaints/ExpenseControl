using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Interfaces;
using ExpenseControl.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ExpenseControl.Infrastructure.Repositories;

public class CategoryRepository(
    ExpenseControlDbContext context, 
    ILogger<CategoryRepository> logger
    ) : ICategoryRepository
{
    public async Task<IEnumerable<Category>> GetAllCategories()
    {
        try
        {
            var categories = await context.Categories.AsNoTracking().ToListAsync();
            return categories;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task<Category?> GetCategory(Guid id)
    {
        try
        {
            var category =  await context.Categories.FindAsync(id);
            return category;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task CreateCategory(Category category)
    {
        try
        {
            await context.Categories.AddAsync(category);
            await context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }
}