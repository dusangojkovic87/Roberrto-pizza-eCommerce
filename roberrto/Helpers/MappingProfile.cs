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
           CreateMap<ProductModel,Product>();
           CreateMap<TeamMember,TeamMemberAddModel>();
           CreateMap<ClientReviewAddModel,Reviews>();
           CreateMap<GalleryImgGetModel,Gallery>();
           CreateMap<Gallery,GalleryImgGetModel>();
           CreateMap<CartItems,CartItemAddModel>().ReverseMap();
            
        }
        
    }
}