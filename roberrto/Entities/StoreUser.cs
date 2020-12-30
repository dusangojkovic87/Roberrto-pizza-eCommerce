using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace roberrto.Entities
{
    public class StoreUser:IdentityUser<int>
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public string UserRole { get; set; }
        public ICollection<Orders> Orders { get; set; }
        public ICollection<CartItems> CartItems { get; set; }
    
    }
}