using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface IOrderRepository
    {
        void takeOrder(int userId, AdressAddModel model);
        IEnumerable<OrderItemsGetModel> GetOrderItems(int userId);
    }


    public class OrderRepository : IOrderRepository
    {
        private readonly AplicationDbContext _context;
        private readonly ICartRepository _cart;
        private readonly IMapper _mapper;
        public OrderRepository(AplicationDbContext context, ICartRepository cart, IMapper mapper)
        {
            _mapper = mapper;
            _cart = cart;
            _context = context;

        }

        public void takeOrder(int userId, AdressAddModel model)
        {

            var cartItems = GetOrderItems(userId);
            var cartItemsTotal = cartItems.Sum(x => x.Price);
            var orderItems = _mapper.Map<ICollection<OrderItems>>(cartItems);

            var order = new Orders
            {
                Adress = model.Adress,
                OrderDate = DateTime.Now,
                OrderItems = orderItems,
                TotalPrice = cartItemsTotal,
                StoreUserId = userId

            };

            _context.Orders.Add(order);
            if (_context.SaveChanges() > 0)
            {
                _cart.DeleteCart(userId);
            }

        }



        public IEnumerable<OrderItemsGetModel> GetOrderItems(int userId)
        {
            var data = _context.CartItems.Where(x => x.StoreUserId == userId).ToList();
            return _mapper.Map<IEnumerable<OrderItemsGetModel>>(data);
        }
    }
}