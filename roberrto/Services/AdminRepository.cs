using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface IAdminRepository
    {
        void addProduct(Product model);
        void deleteProduct(ProductModel model);
        void addTeamMember(TeamMember model);
        void addClientReview(ClientReviewAddModel model);
        void addImgToGallery(Gallery model);
       

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

        public void addClientReview(ClientReviewAddModel model)
        {
            var review = _mapper.Map<Reviews>(model);
            _context.Reviews.Add(review);
            _context.SaveChanges();       
        }

        public void addImgToGallery(Gallery model)
        {
            _context.Gallery.Add(model);
           _context.SaveChanges();
        }

        public void addProduct(Product model)
        {
            _context.Product.Add(model);
            _context.SaveChanges(); 
        }

        public void addTeamMember(TeamMember model)
        { 
                _context.TeamMember.Add(model);
                _context.SaveChanges();   
        }

        public void deleteProduct(ProductModel model)
        {
            var product = _mapper.Map<Product>(model);
            _context.Product.Remove(product);
        }
    }
}