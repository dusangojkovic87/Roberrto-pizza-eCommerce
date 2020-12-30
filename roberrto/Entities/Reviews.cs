using System.ComponentModel.DataAnnotations;

namespace roberrto.Entities
{
    public class Reviews
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ClientFullName { get; set; }
        [Required]
        public string Text { get; set; }

    }
}