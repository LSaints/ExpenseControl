using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Domain.Entities;
// Classe que representa Categoria 
public class Category : BaseEntity
{
    public string Description { get; private set; }
    public CategoryPurpose Purpose { get; private set; }
    
    // Construtor com regras de negocio
    public Category(string description, CategoryPurpose purpose)
    {
        if (string.IsNullOrEmpty(description))
            throw new InvalidOperationException("Descrição invalida.");

        if (description.Length > 200)
            throw new Exception("A descrição excede o numero máximo de 400 caracteres.");
        
        Description = description;
        Purpose = purpose;
    }
    
    public Category() // Construtor vazio para EF Core
    {}
}