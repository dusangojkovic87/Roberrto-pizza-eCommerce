using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace roberrto.Entities
{
    public class StoreUser:IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }    
        
    }
}