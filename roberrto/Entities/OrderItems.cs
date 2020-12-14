using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace roberrto.Entities
{
    public class OrderItems
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }

        public string Description { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string Category { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        [Required]
        public decimal Price { get; set; }
        public int OrdersId { get; set; }
        public Orders Orders { get; set; }
        public ICollection<Product> Product { get; set; }
    }
}