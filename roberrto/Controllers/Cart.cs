using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using roberrto.Models;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Cart : ControllerBase
    {
        private ICartRepository _cart;
        public Cart(ICartRepository cart)
        {
            _cart = cart;

        }


        [HttpPost]
        [Route("add")]
        [Authorize]
        public IActionResult add([FromBody] CartItemAddModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = getUserIdFromContext();
                model.StoreUserId = userId;
                try
                {
                    _cart.addItem(model);
                    return Ok(new { message = "Product added!" });
                }
                catch (Exception e)
                {
                    System.Console.WriteLine(e);
                    return StatusCode(500, new { error = "server error,product not added!" });
                }
            }

            return BadRequest(ModelState);

        }


        [HttpGet]
        [Route("get-cart-data")]
        [Authorize]
        public IActionResult GetCartData()
        {
            var userId = getUserIdFromContext();
            try
            {
                var cartData = _cart.GetCartData(userId);
                return Ok(cartData);

            }
            catch (Exception e)
            {
                System.Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,cannot get cart!" });
            }
        }


        [HttpDelete]
        [Route("remove/{id:int}")]
        [Authorize]
        public IActionResult RemoveCartItem([FromRoute] int id)
        {
            var userId = getUserIdFromContext();
            var productId = id;
            if (ModelState.IsValid)
            {
                try
                {
                    _cart.RemoveCartItem(productId, userId);
                    return Ok(new { status = true });

                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return StatusCode(500, new { error = "Server error,cannot delete item!" });


                }

            }
            return BadRequest(ModelState);
        }



        [HttpDelete]
        [Route("delete")]
        [Authorize]
        public IActionResult DeleteCart()
        {
            var userId = getUserIdFromContext();
            try
            {
                _cart.DeleteCart(userId);
                return Ok(new { message = "Cart deleted!" });

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,cannot delete cart!" });

            }

        }

        [HttpPost]
        [Route("increase-quantity")]
        [Authorize]

        public IActionResult increaseQuantity([FromBody] CartItemAddModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = getUserIdFromContext();
                try
                {
                    _cart.increaseQuantity(model.Id, userId);
                    return Ok(new { status = true });

                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return StatusCode(500, new { error = "Server error,cannot increase quantity!" });
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("decrease-quantity")]
        [Authorize]

        public IActionResult decreaseQuantity([FromBody] CartItemAddModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var userId = getUserIdFromContext();
                    _cart.decreaseQuantity(model.Id, userId);
                    return Ok(new { status = true });

                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return StatusCode(500, new { error = "Server error,cannot decrease quantity!" });


                }
            }
            return BadRequest(ModelState);

        }

        [HttpGet]
        [Route("count")]
        [Authorize]
        public IActionResult cartCounter()
        {

            try
            {
                var userId = getUserIdFromContext();
                var count = _cart.cartCounter(userId);
                return Ok(count);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,canot get cart items count!" });

            }

        }

        private int getUserIdFromContext()
        {
            var userIdString = HttpContext.User.Claims.SingleOrDefault(u => u.Type == "UserId").Value;
            var userId = Int32.Parse(userIdString);
            return userId;
        }
    }
}