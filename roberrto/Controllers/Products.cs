using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Products : ControllerBase
    {

        public IProductRepository _product;
        private readonly ILogger<Products> _logger;

        public Products(IProductRepository product, ILogger<Products> logger)
        {
             _logger = logger;
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
               _logger.LogWarning(e.ToString());
                return BadRequest(new { error = "Cannot get products!" });
            }

        }

        [HttpGet]
        [Route("orders")]
        public IActionResult GetProducts()
        {
            try
            {
                var Products = _product.GetAllProducts();
                return Ok(Products);
            }
            catch (Exception e)
            {
               _logger.LogWarning(e.ToString());
                return BadRequest(new { error = "Cannot get products!" });

            }
        }

        [HttpGet]
        [Route("order-detail/{id:int}")]
        public IActionResult OrderDetail([FromRoute] int id)
        {
            try
            {
                var productId = id;
                var orderDetails = _product.getOrderDetails(productId);
                return Ok(orderDetails);

            }
            catch (Exception e)
            {
               _logger.LogWarning(e.ToString());
                return StatusCode(500, new { error = "Server error,cannot get order details" });


            }


        }
    }
}