namespace ExpenseControl.Application.Responses.User;

public record UserResponse(Guid Id, string Name, uint Age, decimal TotalExpenses, decimal TotalIncome, decimal Balance);
