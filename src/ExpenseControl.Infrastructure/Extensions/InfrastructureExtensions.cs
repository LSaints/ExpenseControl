using ExpenseControl.Domain.Interfaces;
using ExpenseControl.Infrastructure.Data;
using ExpenseControl.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ExpenseControl.Infrastructure.Extensions;

public static class InfrastructureExtensions
{
    public static void UseInfrastructureExtensions(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<ITransactionRepository, TransactionRepository>();
        
        services.AddDbContext<ExpenseControlDbContext>(options => 
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));
    }
}