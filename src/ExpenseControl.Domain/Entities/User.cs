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
    /// Construtor vazio para EF Core
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
            throw new InvalidOperationException("Nome invalido.");
        
        if (name.Length > 200)
            throw new InvalidOperationException("O nome excede o numero de 200 caracteres permitidos.");
        
        Name = name;
    }

    public void ChangeAge(uint age)
    {
        Age = age;
    }
}