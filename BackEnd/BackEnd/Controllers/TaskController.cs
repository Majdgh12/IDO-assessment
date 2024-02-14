using BackEnd.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Xml.Linq;

namespace BackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DBContext _context;

        public ItemsController(DBContext context)
        {
            _context = context;
        }

        // To utilize when creating a new item
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetItem(int id)
        {
            var item = await _context.Tasks.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }


        // To get items based on user id 
        [HttpGet("getItems")]
        public IActionResult GetItems()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userEmailClaim = User.FindFirst(ClaimTypes.Email)?.Value;

            var searchResults = _context.Tasks.Where(item => item.userId.ToString() == userIdClaim).ToList();

            return Ok(searchResults);
        }

        // To post a new item
        [HttpPost]
        public async Task<ActionResult<Models.Task>> PostItem(Models.Task item)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (_context.Tasks == null)
            {
                return Problem("Entity set 'IDODbContext.MyProperty'  is null.");
            }
            if (userId != null)
            {
                var itemToStore = new Models.Task
                {
                    name = item.name,
                    category = item.category,
                    dueDate = item.dueDate,
                    estimate = item.estimate,
                    importance = item.importance,
                    status = item.status,
                    userId = int.Parse(userId)
                };
                _context.Tasks.Add(itemToStore);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetItem", new { id = itemToStore.id }, itemToStore);
            }
            return BadRequest();
        }

        // To update an item status
        [HttpPost("{id}")]
        public async Task<ActionResult<Models.Task>> UpdateItemStatus(int id, [FromBody] Models.Task updatedItem)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (_context.Tasks == null)
            {
                return Problem("Entity set 'IDODbContext.Items' is null.");
            }

            var existingItem = await _context.Tasks.FindAsync(id);

            if (existingItem == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(existingItem);

            if (userId != null)
            {
                var itemToStore = new Models.Task
                {
                    name = updatedItem.name,
                    category = updatedItem.category,
                    dueDate = updatedItem.dueDate,
                    estimate = updatedItem.estimate,
                    importance = updatedItem.importance,
                    status = updatedItem.status,
                    userId = int.Parse(userId)
                };

                _context.Tasks.Add(itemToStore);

                await _context.SaveChangesAsync();

                return CreatedAtAction("GetItem", new { id = itemToStore.id }, itemToStore);
            }
            return BadRequest();
        }

        // To update an item's input field
        [HttpPost("updateItem")]
        public async Task<ActionResult<Models.Task>> UpdateItem(updateTask item)
        {
            if (_context.Tasks == null)
            {
                return Problem("Entity set 'IDODbContext.Items' is null.");
            }

            var existingItem = await _context.Tasks.FindAsync(item.id);

            if (existingItem == null)
            {
                return NotFound();
            }

            switch (item.fieldToUpdate)
            {
                case "name":
                    existingItem.name = item.newContent;
                    break;
                case "category":
                    existingItem.category = item.newContent;
                    break;
                case "dueDate":
                    existingItem.dueDate = item.newContent;
                    break;
                case "estimate":
                    existingItem.estimate = item.newContent;
                    break;
                case "importance":
                    existingItem.importance = item.newContent;
                    break;
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            if (_context.Tasks == null)
            {
                return NotFound();
            }
            var item = await _context.Tasks.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // To verify auth credentials
        [HttpPost]
        [Route("api/login")]
        public IActionResult Login([FromBody] Login model)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var user = _context.Users.SingleOrDefault(u => u.Email == model.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            // Here, you should compare the hashed password stored in your database with the password sent by the user
            bool passwordMatch = BCrypt.Net.BCrypt.Verify(model.Password, user.Password);

            if (passwordMatch)
            {
                // If the password matches, return the user ID
                return Ok(new { userId = user.UserId });
            }
            else
            {
                return Unauthorized();
            }
        }
    }

}
}
