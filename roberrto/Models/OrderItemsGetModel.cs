using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace roberrto.Models
{
    public class OrderItemsGetModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Img { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        [Required]
        public decimal Price { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public bool TopOffer { get; set; }
        [Required]
        public int StoreUserId { get; set; }
    }
}