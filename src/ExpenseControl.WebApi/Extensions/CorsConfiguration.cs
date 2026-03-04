namespace ExpenseControl.WebApi.Extensions;

public static class CorsConfiguration
{
    public static void UseCorsConfiguration(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend",
                policy =>
                {
                    policy
                        .AllowAnyOrigin() // permitindo que qualquer origem possa acessar o nosso backend mas é importante configurar corretamente em produção
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
    }
}