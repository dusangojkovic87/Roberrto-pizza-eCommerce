using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Reviews : ControllerBase
    {
        private readonly IReviewRepository _reviews;
        private readonly ILogger<Reviews> _logger;
        public Reviews(IReviewRepository reviews, ILogger<Reviews> logger)
        {
            _logger = logger;
            _reviews = reviews;

        }
        [HttpGet]
        [Route("get-reviews")]
        public IActionResult GetReviews()
        {
            try
            {
             var reviews = _reviews.GetReviews();
             return Ok(reviews);
                
            }
            catch (Exception e)
            {
                _logger.LogWarning(e.ToString());
                return StatusCode(500,new {error = "Cannot get reviews!"});
                
               
            }
            

        }

    }
}