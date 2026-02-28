using ExpenseControl.Application.Requests.User;
using ExpenseControl.Application.Responses;

namespace ExpenseControl.Application.Interfaces;

public interface IUserService
{
    Task<IEnumerable<UserResponse>> GetAllUsers();
    Task<UserResponse> GetUserById(Guid id);
    Task CreateUser(CreateUserRequest request);
    Task UpdateUser(Guid userId, UpdateUserRequest request);
    Task DeleteUser(Guid id);
}