using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Domain.Entities;

/// <summary>
/// Classe que representa Categoria 
/// </summary>
public class Category : BaseEntity
{
    public string Description { get; private set; }
    public CategoryPurpose Purpose { get; private set; }
    
    /// <summary>
    /// Construtor com regras de negocio
    /// </summary>
    /// <param name="description">Descrição da categoria</param>
    /// <param name="purpose">Finalidade</param>
    /// <exception cref="InvalidOperationException"></exception>
    public Category(string description, CategoryPurpose purpose)
    {
        if (string.IsNullOrEmpty(description))
            throw new InvalidOperationException("Descrição invalida.");

        if (description.Length > 200)
            throw new InvalidOperationException("A descrição excede o numero máximo de 400 caracteres.");
        
        Description = description;
        Purpose = purpose;
    }
    
    /// <summary>
    /// Construtor vazio para EF Core
    /// </summary>
    public Category() // Construtor vazio para EF Core
    {}
}