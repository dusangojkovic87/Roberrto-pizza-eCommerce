using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using roberrto.Entities;

namespace roberrto.Models
{
    public class OrdersGetModel
    {


       
        public int Id { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        [Required]
        public decimal TotalPrice { get; set; }
        [Required]
        public string Adress { get; set; }
        public DateTime? DateDelivered { get; set; }
        public DateTime? DateShipped { get; set; }
        public ICollection<OrderItems> OrderItems { get; set; }

    }
}