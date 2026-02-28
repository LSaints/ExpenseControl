using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Domain.Interfaces;
// Contrato para implementação do repositorio de Categorias
public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAllCategories();
    Task<Category?> GetCategory(Guid id);
    Task CreateCategory(Category category);
}