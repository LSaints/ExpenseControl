using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Models;

namespace ExpenseControl.Domain.Interfaces;
/// <summary>
/// Contrato para implementação do repositorio de Categorias
/// </summary>
public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAllCategories();
    Task<IEnumerable<CategoryTotal>> GetCategoriesTotals();
    Task<Category?> GetCategory(Guid id);
    Task CreateCategory(Category category);
}