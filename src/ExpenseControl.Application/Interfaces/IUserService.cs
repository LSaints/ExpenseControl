using ExpenseControl.Application.Requests.User;
using ExpenseControl.Application.Responses;
using ExpenseControl.Application.Responses.User;

namespace ExpenseControl.Application.Interfaces;

/// <summary>
/// Contrato para implementação do serviço de Pessoa
/// </summary>
public interface IUserService
{
    Task<IEnumerable<UserResponse>> GetAllUsers();
    Task<UserResponse> GetUserById(Guid id);
    Task CreateUser(CreateUserRequest request);
    Task UpdateUser(Guid userId, UpdateUserRequest request);
    Task DeleteUser(Guid id);
}