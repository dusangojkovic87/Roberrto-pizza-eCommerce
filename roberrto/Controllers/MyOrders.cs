using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyOrders : ControllerBase
    {
        private readonly IMyOrdersRepository _myOrders;

        public MyOrders(IMyOrdersRepository myOrders)
        {
            _myOrders = myOrders;

        }


        [HttpGet]
        [Route("get-orders")]
        [Authorize]
        public IActionResult getOrders()
        {

            try
            {
            var userId = getUserIdFromContext();
            var orders =  _myOrders.getOrders(userId);
            return Ok(orders);
                
            }
            catch (Exception e)
            {
              Console.WriteLine(e);
              return StatusCode(500,new {error = "Server error,cannot get orders"});
                
              
            }
           
        }

        private int getUserIdFromContext()
        {
            var userIdString = HttpContext.User.Claims.SingleOrDefault(u => u.Type == "UserId").Value;
            var userId = int.Parse(userIdString);
            return userId;
        }

    }


}

