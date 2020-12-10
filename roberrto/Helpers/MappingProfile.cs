using AutoMapper;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Helpers
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
           CreateMap<RegisterModel,StoreUser>();
           CreateMap<StoreUser,RegisterModel>();
            
        }
        
    }
}