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
                        .WithOrigins("http://localhost:5173") 
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
    }
}