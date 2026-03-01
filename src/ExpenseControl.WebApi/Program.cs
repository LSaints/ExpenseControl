using ExpenseControl.Application.Extensions;
using ExpenseControl.Infrastructure.Data;
using ExpenseControl.Infrastructure.Extensions;
using ExpenseControl.WebApi.Extensions;
using ExpenseControl.WebApi.Middlewares;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Registra as dependências das camadas Infrastructure e Application
builder.Services.UseInfrastructureExtensions(builder.Configuration);
builder.Services.UseApplicationExtensions();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks();

builder.Services.AddDocs();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ExpenseControlDbContext>();
    db.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    // Adicionando documentação Web para API em /api-docs
    app.MapScalarApiReference("api-docs");
}

// Middleware para tratar das exceções de forma global
app.UseMiddleware(typeof(GlobalErrorHandlingMiddleware));
// Rota para healthCheck da API
app.UseHealthChecks("/");
app.UseAuthorization();

app.MapControllers();

app.Run();