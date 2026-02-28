using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Domain.Entities;
// Classe que representa Transação
public class Transaction : BaseEntity
{
    public Guid UserId { get; private set; } // Indetificador da pessoa
    public Guid CategoryId { get; private set; } // Indentificador de categoria
    public string Description { get; private set; }
    public decimal Amount { get; private set; }
    public TransactionType Type { get; private set; }

    public Category Category { get; private set; } // Propriedade de navegação para categoria
    public User User { get; private set; } // Propriedade de navegação para Pessoa

    // Construtor com as regras de negocio
    public Transaction(Guid userId, Guid categoryId, string description, decimal amount, TransactionType type)
    {
        if (userId == Guid.Empty)
            throw new ArgumentException("UserId inválido.");

        if (categoryId == Guid.Empty)
            throw new ArgumentException("CategoryId inválido.");

        if (string.IsNullOrWhiteSpace(description))
            throw new ArgumentException("Descrição é obrigatória.");

        if (description.Length > 400)
            throw new ArgumentException("Descrição deve ter no máximo 400 caracteres.");

        if (amount <= 0)
            throw new ArgumentException("O valor deve ser positivo.");

        UserId = userId;
        CategoryId = categoryId;
        Description = description;
        Amount = amount;
        Type = type;
    }


    public Transaction() // Construtor vazio para EF Core
    {
    }
}