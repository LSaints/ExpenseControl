using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Transaction;
using ExpenseControl.Application.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.WebApi.Controllers
{
    [Route("v1/transactions")]
    [ApiController]
    public class TransactionController(ITransactionService transactionService) : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(TransactionResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<TransactionResponse>>> Get()
        {
            var transactions = await transactionService.GetAllTransactions();
            return Ok(transactions);
        }
        
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TransactionResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<TransactionResponse>> Get(Guid id)
        {
            var transactions = await transactionService.GetTransaction(id);
            return Ok(transactions);
        }
        
        [HttpPost("{userId}")]
        [ProducesResponseType(typeof(TransactionResponse), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<TransactionResponse>> Post(Guid userId, [FromBody] CreateTransactionRequest request)
        {
            await transactionService.CreateTransaction(userId, request);
            return CreatedAtAction(nameof(Get), null);
        }
    }
}
