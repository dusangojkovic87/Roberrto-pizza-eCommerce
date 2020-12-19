using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace roberrto.Models
{
    public class TeamMemberAddModel
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Job { get; set; }
        [Required]
        public IFormFile Img { get; set; }
        [Required]
        public string Email { get; set; }
    }
}