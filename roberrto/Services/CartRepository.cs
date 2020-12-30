using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface ICartRepository
    {
        bool addItem(CartItemAddModel model);
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

        public bool addItem(CartItemAddModel model){
           var newItem =  _mapper.Map<CartItems>(model);
            _context.CartItems.Add(newItem);
            if(_context.SaveChanges() > 0){
                return true;
            }else{
                return false;
            }   
        }
        
    }


}
