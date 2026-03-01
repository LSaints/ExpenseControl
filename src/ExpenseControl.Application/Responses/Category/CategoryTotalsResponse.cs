namespace ExpenseControl.Application.Responses.Category;

public record CategoryTotalsResponse(IEnumerable<CategoryTotalResponse> Categories, CategorySummaryResponse Summary); 
    
