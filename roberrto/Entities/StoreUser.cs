using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace roberrto.Entities
{
    public class StoreUser:IdentityUser
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public string UserRole { get; set; }
        public ICollection<Orders> Orders { get; set; }
    
    }
}