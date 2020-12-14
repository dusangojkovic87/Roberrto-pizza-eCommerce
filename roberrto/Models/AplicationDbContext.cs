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

         /* protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrderItems>()
            .HasKey(o => new {o.Orders,o.Product});
    } */

        public DbSet<StoreUser> User {get;set;}
         public DbSet<Orders> Orders {get;set;}
         public DbSet<OrderItems> OrderItems {get;set;}
         public DbSet<Product> Product {get;set;}

        
    }
}