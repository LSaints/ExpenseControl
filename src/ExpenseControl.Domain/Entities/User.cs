namespace ExpenseControl.Domain.Entities;
/// <summary>
/// Classe que representa Pessoa no sistema
/// </summary>
public class User : BaseEntity
{
    public string Name { get; private set; }
    /// <summary>
    /// Idade com tipo <b>uint</b> para valores positivos
    /// </summary>
    public uint Age { get; private set; } 
    
    public ICollection<Transaction> Transactions { get; private set; }

    /// <summary>
    /// Construtor com regras de negocio 
    /// </summary>
    /// <param name="name">Nome de pessoa</param>
    /// <param name="age">idade de pessoa</param>
    public User(string name, uint age)
    {
        ChangeName(name);
        ChangeAge(age);
    }

    /// <summary>
    /// Construtor vazío para EF Core
    /// </summary>
    public User()
    {
    }

    public bool IsOfLegalAge()
    {
        return Age >= 18;
    }

    public void ChangeName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentNullException(nameof(name), "Nome inválido.");
        
        if (name.Length > 200)
            throw new ArgumentOutOfRangeException(nameof(name), "O nome deve ter no máximo 200 caracteres.");
        
        Name = name;
    }

    public void ChangeAge(uint age)
    {
        if (age <= 0)
            throw new ArgumentOutOfRangeException(nameof(age), "A idade deve ser maior que zero.");
        
        Age = age;
    }
}