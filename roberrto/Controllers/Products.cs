using Microsoft.AspNetCore.Mvc;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Products:ControllerBase
    {

    public IActionResult GetProducts(){
        
    return Ok();
    }


        
    }
}