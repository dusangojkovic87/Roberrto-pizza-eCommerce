using System;
using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Products : ControllerBase
    {

        public IProductRepository _product; 

        public Products(IProductRepository product)
        {
            _product = product;

        }


       [HttpGet]
       [Route("top-offers")]
        public IActionResult TopOffers()
        {
            try
            {
                var TopOfferProducts = _product.TopOfferProducts();
                return Ok(TopOfferProducts);
            }
            catch (Exception e)
            {
               Console.WriteLine(e);
               return BadRequest(new {error = "Cannot get products!"});
            }
                     
        }

        [HttpGet]
        [Route("orders")]
        public IActionResult GetProducts(){
            try
            {
                var Products = _product.GetAllProducts();
                return Ok(Products);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(new {error = "Cannot get products!"});
               
            }
        }
    }
}