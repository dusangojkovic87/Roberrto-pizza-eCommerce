using System.ComponentModel.DataAnnotations;

namespace roberrto.Models
{
    public class RegisterModel
    {
        [Required]
        public string FullName { get; set; }
         [Required]
         public string UserName { get; set; }
         [Required]
         [EmailAddress]

        public string Email { get; set; }
         [Required]
        public string Password { get; set; }
    }
}