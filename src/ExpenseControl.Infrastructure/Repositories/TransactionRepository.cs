using ExpenseControl.Domain.Entities;
using ExpenseControl.Domain.Interfaces;
using ExpenseControl.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ExpenseControl.Infrastructure.Repositories;
/// <summary>
/// Implementação do contrato para o repositorio de Transação
/// </summary>
/// <param name="context">Sessão do banco de dados</param>
/// <param name="logger">Serviço de logs</param>
public class TransactionRepository(
    ExpenseControlDbContext context, 
    ILogger<TransactionRepository> logger
    ) : ITransactionRepository
{
    public async Task<IEnumerable<Transaction>> GetAllTransactions()
    {
        try
        {
            var transactions = await context.Transactions.AsNoTracking().ToListAsync();
            return transactions;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task<Transaction?> GetTransaction(Guid id)
    {
        try
        {
            var transaction = await context.Transactions.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            return transaction;
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }

    public async Task CreateTransaction(Transaction transaction)
    {
        try
        {
            await context.Transactions.AddAsync(transaction);
            await context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            logger.LogError(e.Message);
            throw;
        }
    }
}