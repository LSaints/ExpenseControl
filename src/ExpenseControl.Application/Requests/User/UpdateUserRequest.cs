namespace ExpenseControl.Application.Requests.User;

/// <summary>
/// DTO de atualizar Pessoa
/// </summary>
/// <param name="Name">Nome de pessoa</param>
/// <param name="Age">Idade de pessoa</param>
public record UpdateUserRequest(string Name, uint Age);
