
using System.Collections.Generic;
using System.Linq;
using roberrto.Entities;
using roberrto.Models;
using AutoMapper;

public interface IGalleryRepository{
    List<GalleryImgGetModel> GetGalleryImages();
}





namespace roberrto.Services
{
    public class GalleryRepository:IGalleryRepository
    {
        private AplicationDbContext _context;
        public IMapper _mapper;

        public GalleryRepository(AplicationDbContext context,IMapper mapper)
        {
             _mapper = mapper;
             _context = context;
            
        }

        List<GalleryImgGetModel> IGalleryRepository.GetGalleryImages()
        {
             var result =  _context.Gallery.Where(i => i.Show == true).Take(6).OrderBy(i => i.Id).ToList();
             var images = _mapper.Map<List<GalleryImgGetModel>>(result);
             return images;
        }
    }

}