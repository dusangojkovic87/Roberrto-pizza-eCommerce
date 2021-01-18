using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using roberrto.Models;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Order : ControllerBase
    {
        private ICartRepository _cart;

        private readonly IOrderRepository _order;

        private readonly IMapper _mapper;
        private readonly ILogger<Order> _logger;

        public Order(ICartRepository cart, IOrderRepository order, IMapper mapper, ILogger<Order> logger)
        {
            _logger = logger;
            _mapper = mapper;
            _order = order;
            _cart = cart;

        }




        [HttpPost]
        [Route("take-order")]
        [Authorize]
        public IActionResult takeOrder([FromBody] AdressAddModel model)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var userId = getUserIdFromContext();
                    _order.takeOrder(userId, model);
                    return Ok(new { success = true });

                }
                catch (Exception e)
                {
                   _logger.LogWarning(e.ToString());
                    return StatusCode(500, new { error = "Server error,taking order failed!" });
                }
            }
            return BadRequest(ModelState);
        }

        private int getUserIdFromContext()
        {
            var userIdString = HttpContext.User.Claims.SingleOrDefault(u => u.Type == "UserId").Value;
            var userId = int.Parse(userIdString);
            return userId;
        }


    }
}