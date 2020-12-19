using System.Collections.Generic;
using System.Linq;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{

    public interface IProductRepository
    {
         IEnumerable<Product> TopOfferProducts();
         IEnumerable<Product> GetAllProducts();
    }

    public class ProductRepository:IProductRepository
    {
        private AplicationDbContext _context; 
        public ProductRepository(AplicationDbContext context)
        {
           _context = context;

        }

        public IEnumerable<Product> GetAllProducts()
        {
            var result = _context.Product.ToList();
            return result;
        }

        public IEnumerable<Product> TopOfferProducts()
        {
            var result = _context.Product.Where(p=> p.TopOffer == true).ToList();
            return result;       
        }
    }

}