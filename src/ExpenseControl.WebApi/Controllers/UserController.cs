using ExpenseControl.Application.Interfaces;
using ExpenseControl.Application.Requests.User;
using ExpenseControl.Application.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.WebApi.Controllers
{
    [Route("v1/users")]
    [ApiController]
    public class UserController(IUserService userService) : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UserResponse>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<UserResponse>>> Get()
        {
            var users = await userService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id:guid}")]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<UserResponse>> Get(Guid id)
        {
            var user = await userService.GetUserById(id);
            return Ok(user);
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Create([FromBody] CreateUserRequest request)
        {
            await userService.CreateUser(request);
            return CreatedAtAction(nameof(Get), null);
        }

        [HttpPut("{id:guid}")]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateUserRequest request)
        {
            await userService.UpdateUser(id, request);
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Delete(Guid id)
        {
            await userService.DeleteUser(id);
            return NoContent();
        }
    }
}
