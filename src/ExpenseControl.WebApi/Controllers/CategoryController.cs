using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.Category;
using ExpenseControl.Application.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.WebApi.Controllers
{
    [Route("v1/categories")]
    [ApiController]
    public class CategoryController(ICategoryService categoryService) : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(CategoryResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<CategoryResponse>>> Get()
        {
            var categories = await categoryService.GetCategories();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CategoryResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<CategoryResponse>> Get(Guid id)
        {
            var categories = await categoryService.GetCategory(id);
            return Ok(categories);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CategoryResponse), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<CategoryResponse>> Post([FromBody] CreateCategoryRequest category)
        {
            await categoryService.CreateCategory(category);
            return CreatedAtAction(nameof(Get), null);
        }
    }
}
