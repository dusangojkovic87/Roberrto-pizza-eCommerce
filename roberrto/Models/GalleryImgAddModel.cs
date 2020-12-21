using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace roberrto.Models
{
    public class GalleryImgAddModel
    {
        [Required]
        public IFormFile Img { get; set; }
    }
}