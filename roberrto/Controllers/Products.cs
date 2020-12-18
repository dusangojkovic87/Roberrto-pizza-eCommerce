using Microsoft.AspNetCore.Mvc;
using roberrto.Models;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Products:ControllerBase
    {
        private readonly AplicationDbContext _context;
        
        public Products(AplicationDbContext context)
        {
            _context = context;
            
        }

    public IActionResult GetProducts(){
        
    return Ok();
    }


        
    }
}