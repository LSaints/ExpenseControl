namespace ExpenseControl.Domain.Entities;
/// <summary>
/// Classe abstrata para padronizar e evitar duplicidade de código
/// </summary>
public abstract class BaseEntity
{
    /// <summary>
    /// Identificador padrão para classes filhas gerado automaticamente
    /// </summary>
    public Guid Id { get; private set; } = Guid.NewGuid();
}