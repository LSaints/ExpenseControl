namespace ExpenseControl.Application.Requests.User;

/// <summary>
/// DTO de criação de Pessoa
/// </summary>
/// <param name="Name">Nome de pessoa</param>
/// <param name="Age">Idade de pessoa</param>
public record CreateUserRequest(string Name, uint Age);