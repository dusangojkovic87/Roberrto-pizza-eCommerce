using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace roberrto.Models
{
    public class ProductAddModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public IFormFile Img { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        [Required]
        public decimal Price { get; set; }
        [Required]
        public bool TopOffer { get; set; }
        
    }
}