using System.Collections.Generic;
using System.Linq;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface IReviewRepository
    {
        IEnumerable<Reviews> GetReviews();
    }
    public class ReviewRepository : IReviewRepository
    {
        private readonly AplicationDbContext _context;
        public ReviewRepository(AplicationDbContext context)
        {
           _context = context;

        }
        public IEnumerable<Reviews> GetReviews()
        {
            return _context.Reviews.ToList();

        }
    }
}