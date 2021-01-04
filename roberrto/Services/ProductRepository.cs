using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{

    public interface IProductRepository
    {
        IEnumerable<Product> TopOfferProducts();
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> getOrderDetails(int id);
    }

    public class ProductRepository : IProductRepository
    {
        private AplicationDbContext _context;
        private IMapper _mapper;
        public ProductRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }

        public IEnumerable<Product> GetAllProducts()
        {
            var result = _context.Product.ToList();
            return result;
        }

        public IEnumerable<Product> TopOfferProducts()
        {
            var result = _context.Product.Where(p => p.TopOffer == true).ToList();
            return result;
        }

        public IEnumerable<Product> getOrderDetails(int id)
        {
            var orderDetails = _context.Product.Where(x => x.Id == id).ToList();
            return orderDetails;
        }


    }

}