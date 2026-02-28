using System.Net;
using System.Text.Json;
using ExpenseControl.Domain.Exceptions;

namespace ExpenseControl.WebApi.Middlewares;

public class GlobalErrorHandlingMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await next(httpContext);
        }
        catch (Exception e)
        {
            await HandleExceptionAsync(httpContext, e);
        }
    }

    private static Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
    {
        HttpStatusCode status;
        var message = string.Empty;
        var stackTrace = string.Empty;
        var exceptionType = exception.GetType();

        switch (exception)
        {
            case NotFound:
                message = exception.Message;
                stackTrace = exception.StackTrace;
                status = HttpStatusCode.NotFound;
                break;
            case InvalidOperationException:
                message = exception.Message;
                stackTrace = exception.StackTrace;
                status = HttpStatusCode.BadRequest;
                break;
            default:
                message = exception.Message;
                stackTrace = exception.StackTrace;
                status = HttpStatusCode.InternalServerError;
                break;
        }

        var response = JsonSerializer.Serialize(new {  status, message, stackTrace });
        httpContext.Response.ContentType = "application/json";
        httpContext.Response.StatusCode = (int)status;
        return httpContext.Response.WriteAsync(response);
    }
}