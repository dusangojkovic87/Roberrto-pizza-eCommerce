using System.ComponentModel.DataAnnotations;

namespace roberrto.Entities
{
    public class Gallery
    {
    [Key]
     public int Id { get; set; }
     [Required]
     public string Img { get; set; }
     [Required]
     public bool Show { get; set; }

     public Gallery()
     {
         Show = false;
         
     }

    }
}