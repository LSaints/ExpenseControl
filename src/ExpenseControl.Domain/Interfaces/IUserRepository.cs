using ExpenseControl.Domain.Entities;

namespace ExpenseControl.Domain.Interfaces;
// Contrato para implementação do repositorio de Pessoa
public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllUsers();
    Task<User?> GetUserById(Guid id);
    Task CreateUser(User user);
    Task UpdateUser(Guid userId, User user);
    Task DeleteUser(Guid id);
}