namespace ExpenseControl.Application.Responses;

public record UserResponse(Guid Id, string Name, uint Age, decimal TotalExpenses, decimal TotalIncome, decimal Balance);
