using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Domain.Entities;
/// <summary>
/// Classe que representa Transação
/// </summary>
public class Transaction : BaseEntity
{
    /// <summary>
    /// Indetificador de pessoa
    /// </summary>
    public Guid UserId { get; private set; }
    /// <summary>
    /// Indentificador de categoria
    /// </summary>
    public Guid CategoryId { get; private set; }
    public string Description { get; private set; }
    public decimal Amount { get; private set; }
    public TransactionType Type { get; private set; }
    /// <summary>
    /// Propriedade de navegação para categoria
    /// </summary>
    public Category Category { get; private set; }
    /// <summary>
    /// Propriedade de navegação para Pessoa
    /// </summary>
    public User User { get; private set; }

    /// <summary>
    /// Construtor com as regras de negocio
    /// </summary>
    /// <param name="userId">Identifacdor de pessoa</param>
    /// <param name="categoryId">Identifacdor de categoria</param>
    /// <param name="description">Descrição da transação</param>
    /// <param name="amount">Valor da transação</param>
    /// <param name="type">Tipo da transação, Despesa ou Receita</param>
    public Transaction(Guid userId, Guid categoryId, string description, decimal amount, TransactionType type)
    {
        if (userId == Guid.Empty)
            throw new ArgumentNullException(nameof(userId), "Identificador do usuário inválido.");

        if (categoryId == Guid.Empty)
            throw new ArgumentException(nameof(categoryId), "Identificador de categória inválido.");

        if (string.IsNullOrWhiteSpace(description))
            throw new ArgumentNullException(nameof(description), "A descrição é obrigatória.");

        if (description.Length > 400)
            throw new ArgumentOutOfRangeException(nameof(description), "A descrição deve ter no máximo 400 caracteres.");

        if (amount <= 0)
            throw new ArgumentOutOfRangeException(nameof(amount), "O valor deve ser maior que zero.");
        
        if (!Enum.IsDefined(typeof(TransactionType), type))
            throw new ArgumentException(nameof(type), "Tipo de transação é invalido.");

        UserId = userId;
        CategoryId = categoryId;
        Description = description;
        Amount = amount;
        Type = type;
    }

    /// <summary>
    /// Construtor vazío para EF Core
    /// </summary>
    public Transaction() // Construtor vazio para EF Core
    {
    }
}