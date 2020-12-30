using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using roberrto.Entities;

namespace roberrto.Models
{
    public class AplicationDbContext:IdentityDbContext<StoreUser,AplicationRole,int>
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options):base(options)
        {
            
        }

        public DbSet<StoreUser> User {get;set;}
         public DbSet<Orders> Orders {get;set;}
         public DbSet<OrderItems> OrderItems {get;set;}
         public DbSet<Product> Product {get;set;}
         public DbSet<TeamMember> TeamMember {get;set;}
         public DbSet<Reviews> Reviews { get; set; }
         public DbSet<Gallery> Gallery { get; set; }
         public DbSet<CartItems> CartItems { get; set; }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
          {
            base.OnModelCreating(modelBuilder);
             modelBuilder.Entity<Product>()
               .Property(p => p.Quantity )
               .HasDefaultValue(1);
          }



  
    }
   
}