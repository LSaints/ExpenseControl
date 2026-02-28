namespace ExpenseControl.Domain.Exceptions;

public class NotFound(string? message) : Exception(message);