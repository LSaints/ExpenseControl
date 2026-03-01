using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.User;
using ExpenseControl.Application.Responses;
using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Exceptions;
using ExpenseControl.Domain.Interfaces;

namespace ExpenseControl.Application.Services;
/// <summary>
/// Implementação do contrato para o serviço de Pessoa
/// </summary>
/// <param name="repository">contrato de repositorio</param>
public class UserService(IUserRepository repository) : IUserService
{
    public async Task<IEnumerable<UserResponse>> GetAllUsers()
    {
        var users = await repository.GetAllUsers();
        var response = users.Select(user => new UserResponse(user.Id, user.Name, user.Age));
        return response;
    }

    public async Task<UserResponse> GetUserById(Guid id)
    {
        var user = await repository.GetUserById(id);
        if (user is null)
            throw new NotFound("Usuário não encontrado.");
        return new UserResponse(user.Id, user.Name, user.Age);

    }

    public async Task CreateUser(CreateUserRequest request)
    {
        var user = new User(request.Name, request.Age);
        await repository.CreateUser(user);
    }

    public async Task UpdateUser(Guid userId, UpdateUserRequest request)
    {
        var userExists = await repository.GetUserById(userId);
        if (userExists is null) throw new NotFound("Usuário não encontrado.");
        
        var user = new User(request.Name, request.Age);
        await repository.UpdateUser(userId, user);
    }

    public async Task DeleteUser(Guid id)
    {
        var userExists = await repository.GetUserById(id);
        if (userExists is null) throw new NotFound("Usuário não encontrado.");
        
        await repository.DeleteUser(id);
    }
}