using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using roberrto.Entities;

namespace roberrto.Models
{
    public class AplicationDbContext:IdentityDbContext<StoreUser>
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options):base(options)
        {
            
        }
        
    }
}