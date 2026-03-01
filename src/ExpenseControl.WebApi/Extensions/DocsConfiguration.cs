using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http.Json;
using Microsoft.OpenApi;

namespace ExpenseControl.WebApi.Extensions;

public static class DocsConfiguration
{
    public static void AddDocs(this IServiceCollection services)
    {
        services.Configure<JsonOptions>(options =>
        {
            options.SerializerOptions.Converters.Add(new JsonStringEnumConverter());
        });
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo()
            {
                Title = "Expense Control API",
                Version = "v1",
                Description = "API para controle de despesa",
            });
            c.UseInlineDefinitionsForEnums();
        });
    }
}