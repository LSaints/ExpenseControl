using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Domain.Interfaces;
/// <summary>
/// Contrato para implementação do repositorio de Categorias
/// </summary>
public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAllCategories();
    Task<Category?> GetCategory(Guid id);
    Task CreateCategory(Category category);
}