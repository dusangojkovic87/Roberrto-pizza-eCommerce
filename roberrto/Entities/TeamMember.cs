using System.ComponentModel.DataAnnotations;

namespace roberrto.Entities
{
    public class TeamMember
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Job { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string Email { get; set; }
    }
}