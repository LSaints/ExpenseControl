using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ExpenseControl.Application.Extensions;

/// <summary>
/// Metodo extensivel para injetar as dependencias da camada de aplicação
/// </summary>
public static class ApplicationExtensions
{
    public static void UseApplicationExtensions(this IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<ITransactionService, TransactionService>();
    }
}