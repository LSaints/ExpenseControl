namespace ExpenseControl.Application.Responses.Category;

public record CategorySummaryResponse(decimal TotalExpenses, decimal TotalIncomes) 
{
    public decimal TotalBalance { get; init; } = TotalIncomes -  TotalExpenses;
}