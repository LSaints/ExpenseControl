using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Enums;
using ExpenseControl.Domain.Interfaces;
using ExpenseControl.Domain.Models;
using ExpenseControl.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ExpenseControl.Infrastructure.Repositories;

/// <summary>
/// Implementação do contrato para o repositorio de Categoria
/// </summary>
/// <param name="context">Sessão do banco de dados</param>
/// <param name="logger">Serviço de logs</param>
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

    public async Task<IEnumerable<CategoryTotal>> GetCategoriesTotals()
    {
        try
        {
            var totals = await context.Categories
                .Select(c => new CategoryTotal(
                    c.Description,
                    c.Transactions
                        .Where(t => t.Type == TransactionType.Expense)
                        .Sum(t => (decimal?)t.Amount) ?? 0,
                    c.Transactions
                        .Where(t => t.Type == TransactionType.Income)
                        .Sum(t => (decimal?)t.Amount) ?? 0
                ))
                .AsNoTracking()
                .ToListAsync();

            return totals;
        }
        catch (Exception e)
        {
            logger.LogError(e, "Erro ao obter totais por categoria");
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