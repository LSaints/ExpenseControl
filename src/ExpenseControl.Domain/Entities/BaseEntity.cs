namespace ExpenseControl.Domain.Entities;
// Classe abstrata para padronizar e evitar duplicidade de código
public abstract class BaseEntity
{
    // Identificador padrão para classes filhas gerado automaticamente
    public Guid Id { get; private set; } = Guid.NewGuid();
}