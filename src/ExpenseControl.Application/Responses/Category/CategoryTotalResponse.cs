namespace ExpenseControl.Application.Responses.Category;

public record CategoryTotalResponse(string Description, decimal TotalExpenses, decimal TotalIncomes)
{
    public decimal Balance { get; init; } = TotalIncomes - TotalExpenses;
}