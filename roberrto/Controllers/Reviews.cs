using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Reviews : ControllerBase
    {
        private readonly IReviewRepository _reviews;
        public Reviews(IReviewRepository reviews)
        {
            _reviews = reviews;

        }
        [HttpGet]
        [Route("get-reviews")]
        public IActionResult GetReviews()
        {
            var reviews = _reviews.GetReviews();
            return Ok(reviews);

        }

    }
}