using ExpenseControl.Domain.Enums;

namespace ExpenseControl.Domain.Models;

public record CategoryTotal(Guid Id, string Description, CategoryPurpose Purpose, decimal TotalExpenses, decimal TotalIncomes)
{
    public decimal Balance { get; init; } = TotalIncomes - TotalExpenses;
}