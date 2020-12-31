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
          if(ModelState.IsValid){
            var userId = HttpContext.User.Claims.SingleOrDefault(u => u.Type == "UserId").Value;
             model.StoreUserId = Int32.Parse(userId);
             try
              {
                _cart.addItem(model);
                return Ok("Product added!");          
              }
              catch (Exception e)
              {
                System.Console.WriteLine(e); 
                return StatusCode(500,new {error = "server error,product not added!"});               
              }
          }

          return BadRequest(model); 
         
        }


        [HttpGet]
        [Route("get-cart-data")]
        [Authorize]
        public IActionResult GetCartData(){
          var userIdString = HttpContext.User.Claims.SingleOrDefault(u => u.Type == "UserId").Value;
          var userId = Int32.Parse(userIdString);
          try
          {
            var cartData = _cart.GetCartData(userId);
            return Ok(cartData);
             
          }
          catch (Exception e)
          {
            System.Console.WriteLine(e);
            return StatusCode(500,new {error ="Server error,cannot get cart!"});         
          }       
        }     
    }
}