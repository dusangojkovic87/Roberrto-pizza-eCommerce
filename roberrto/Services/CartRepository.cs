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
        void RemoveCartItem(int productId, int userId);
        void DeleteCart(int userId);
        void increaseQuantity(int productId, int userId);
        void decreaseQuantity(int productId, int userId);
        int cartCounter(int userId);
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

        public void addItem(CartItemAddModel model)
        {
            var newItem = _mapper.Map<CartItems>(model);
            var itemExists = _context.CartItems.FirstOrDefault(x => x.Id == newItem.Id);
            if (itemExists != null)
            {
                itemExists.Quantity += 1;
                itemExists.Price *= 2;
                _context.CartItems.Update(itemExists);
                _context.SaveChanges();
            }
            else
            {
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

        public void RemoveCartItem(int productId, int userId)
        {
            var itemToRemove = _context.CartItems.SingleOrDefault(x => x.StoreUserId == userId && x.Id == productId);
            if (itemToRemove != null)
            {
                _context.CartItems.Remove(itemToRemove);
                _context.SaveChanges();
            }

        }

        public void DeleteCart(int userId)
        {
            _context.CartItems.RemoveRange(_context.CartItems.Where(x => x.StoreUserId == userId));
            _context.SaveChanges();
        }

        public void increaseQuantity(int productId, int userId)
        {
            var product = _context.CartItems.FirstOrDefault(x => x.Id == productId && x.StoreUserId == userId);
            if (product != null)
            {
                product.Quantity += 1;
                _context.CartItems.Update(product);
                _context.SaveChanges();
            }
        }


        public void decreaseQuantity(int productId, int userId)
        {
            var product = _context.CartItems.FirstOrDefault(x => x.Id == productId && x.StoreUserId == userId);
            if (product != null)
            {
                product.Quantity -= 1;
                if (product.Quantity == 0)
                {
                    _context.CartItems.Remove(product);
                    _context.SaveChanges();
                }
                else
                {
                    _context.CartItems.Update(product);
                    _context.SaveChanges();
                }
            }


        }

        public int cartCounter(int userId)
        {
            var count = _context.CartItems.Count(x => x.StoreUserId == userId);
            return count;
        }
    }
}
