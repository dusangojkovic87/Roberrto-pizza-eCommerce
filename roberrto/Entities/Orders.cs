using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace roberrto.Entities
{
    public class Orders
    {
        public int Id { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        public int StoreUserId { get; set; }
        public int OrderItemsId { get; set; }
        public StoreUser StoreUser { get; set; }
        public ICollection<OrderItems> OrderItems {get;set;}

    }
}