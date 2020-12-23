using System.ComponentModel.DataAnnotations;

namespace roberrto.Models
{
    public class GalleryImgGetModel
    {
        [Required]
        public string Img { get; set; }
    }
}