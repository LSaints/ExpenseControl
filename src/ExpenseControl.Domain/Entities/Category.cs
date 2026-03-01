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
    /// Propriedade de navegação para Transação
    /// </summary>
    public ICollection<Transaction> Transactions { get; private set; }
    
    /// <summary>
    /// Construtor com regras de negocio
    /// </summary>
    /// <param name="description">Descrição da categoria</param>
    /// <param name="purpose">Finalidade</param>
    public Category(string description, CategoryPurpose purpose)
    {
        if (string.IsNullOrEmpty(description))
            throw new ArgumentNullException(nameof(description), "A descrição é obrigatória.");

        if (description.Length > 200)
            throw new ArgumentOutOfRangeException(nameof(description), "A descrição deve ter no máximo 400 caracteres.");
        
        if (!Enum.IsDefined(typeof(CategoryPurpose), purpose))
            throw new ArgumentException(nameof(purpose), "Tipo de finalidade da categória é invalido.");
        
        Description = description;
        Purpose = purpose;
    }
    
    /// <summary>
    /// Construtor vazio para EF Core
    /// </summary>
    public Category() // Construtor vazio para EF Core
    {}
}