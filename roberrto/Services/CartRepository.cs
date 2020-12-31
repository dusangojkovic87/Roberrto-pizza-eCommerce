using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface ICartRepository
    {
        void addItem(CartItemAddModel model);
        IEnumerable<CartItemsGetModel> GetCartData(int userId);
    }
    public class CartRepository : ICartRepository
    {
        private AplicationDbContext _context;
        private readonly IMapper _mapper;
        public CartRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }

        public void addItem(CartItemAddModel model){
           var newItem =  _mapper.Map<CartItems>(model);
           var itemExists = _context.CartItems.FirstOrDefault(x => x.Id == newItem.Id);
           if(itemExists != null){
                itemExists.Quantity += 1;
                itemExists.Price *= 2;
               _context.CartItems.Update(itemExists);
               _context.SaveChanges();
               
           }else{
               var newProduct = _mapper.Map<CartItems>(model);
               _context.CartItems.Add(newProduct);
               _context.SaveChanges();
           }                    
        }

        public IEnumerable<CartItemsGetModel> GetCartData(int userId)
        {
           var cartData = _context.CartItems.Where(x => x.StoreUserId == userId).ToList();
           return _mapper.Map<IEnumerable<CartItemsGetModel>>(cartData);
        }
    }
}
