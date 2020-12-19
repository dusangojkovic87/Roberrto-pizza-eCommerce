using System;
using System.Threading.Tasks;
using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface IAdminRepository
    {
        bool addProduct(Product model);
        bool deleteProduct(ProductModel model);
        bool addTeamMember(TeamMember model);
        bool addClientReview(ClientReviewAddModel model);
       

    }
    public class AdminRepository : IAdminRepository
    {
        private readonly AplicationDbContext _context;
        private readonly IMapper _mapper;
        public AdminRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }

        public bool addClientReview(ClientReviewAddModel model)
        {
            var review = _mapper.Map<Reviews>(model);
            _context.Reviews.Add(review);
            if(_context.SaveChanges() > 0){
                return true;
            }else{
                return false;
            }
        }

        public bool addProduct(Product model)
        {
            _context.Product.Add(model);
            if (_context.SaveChanges() > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        public bool addTeamMember(TeamMember model)
        { 
                _context.TeamMember.Add(model);
                if(_context.SaveChanges() > 0){
                    return true;
                }else{
                    return false;
                }
            
        }

        public bool deleteProduct(ProductModel model)
        {
            var product = _mapper.Map<Product>(model);
            _context.Product.Remove(product);
            if (_context.SaveChanges() > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


    }
}