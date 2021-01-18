using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using roberrto.Models;

namespace roberrto.Services
{

    public interface IMyOrdersRepository
    {
        IEnumerable<OrdersGetModel> getOrders(int userId);
      
    }



    public class MyOrdersRepository : IMyOrdersRepository
    {
        private AplicationDbContext _context;
        
        public MyOrdersRepository(AplicationDbContext context)
        {
            _context = context;

        }

       

        public IEnumerable<OrdersGetModel> getOrders(int userId)
        {
            var orders = _context.Orders.Include(x => x.OrderItems);
            orders.Where(x => x.StoreUserId == userId);
            var ordersGetModel = orders.Select(x => new OrdersGetModel{
                Id = x.Id,
                OrderDate = x.OrderDate,
                TotalPrice = x.TotalPrice,
                Adress = x.Adress,
                DateDelivered = x.DateDelivered,
                DateShipped = x.DateShipped,
                OrderItems = x.OrderItems
            });


            return ordersGetModel;

        }


}
}