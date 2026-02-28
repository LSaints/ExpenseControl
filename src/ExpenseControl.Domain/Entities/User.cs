namespace ExpenseControl.Domain.Entities;
// Classe que representa Pessoa no sistema
public class User : BaseEntity
{
    public string Name { get; private set; }
    public uint Age { get; private set; } // tipo uint para valores positivos
    
    public ICollection<Transaction> Transactions { get; private set; }

    // Construtor com regras de negocio
    public User(string name, uint age)
    {
        ChangeName(name);
        ChangeAge(age);
    }

    public User() // Construtor vazio para EF Core
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