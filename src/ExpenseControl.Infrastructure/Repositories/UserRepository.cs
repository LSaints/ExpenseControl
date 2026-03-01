using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Interfaces;
using ExpenseControl.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ExpenseControl.Infrastructure.Repositories;

/// <summary>
/// Implementação do contrato para o repositorio de Pessoa
/// </summary>
/// <param name="context">Sessão do banco de dados</param>
/// <param name="logger">Serviço de logs</param>
public class UserRepository(ExpenseControlDbContext context, ILogger<UserRepository> logger) : IUserRepository
{
    public async Task<IEnumerable<User>> GetAllUsers()
    {
        try
        {
            var users = await context.Users
                .AsNoTracking()
                .Include(u => u.Transactions)
                .ToListAsync();
            
            return users;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task<User?> GetUserById(Guid id)
    {
        try
        {
            var user = await context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task CreateUser(User user)
    {
        try
        {
            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task UpdateUser(Guid userId, User user)
    {
        try
        {
            var userToUpdate = await context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            userToUpdate.ChangeName(user.Name);
            userToUpdate.ChangeAge(user.Age);
            
            context.Users.Update(userToUpdate);
            await context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task DeleteUser(Guid id)
    {
        try
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.Id == id);
            context.Users.Remove(user);
            await context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }
}