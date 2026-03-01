namespace ExpenseControl.Domain.Models;

public record CategoryTotal(string Description, decimal TotalExpenses, decimal TotalIncomes)
{
    public decimal Balance { get; init; } = TotalIncomes - TotalExpenses;
}