using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(opt=>{
              opt.AddPolicy("AllowEverything",builder =>{
                  builder.AllowAnyOrigin();
                  builder.AllowAnyMethod();
                  builder.AllowAnyHeader();
                 
              });
            });
            services.AddAutoMapper(typeof(Startup));
            services.AddIdentity<StoreUser,IdentityRole>(opt =>{
                opt.User.RequireUniqueEmail = true;
            })
               .AddEntityFrameworkStores<AplicationDbContext>();

            services.AddAuthentication(opt=>{
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
              .AddCookie()
              .AddJwtBearer(cfg =>{
                   cfg.TokenValidationParameters = new TokenValidationParameters()
                   {
                      ValidIssuer = Configuration["Tokens:Issuer"],
                      ValidAudience = Configuration["Tokens:Audience"],
                      IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:key"]))   
                   };
              });

               services.AddAuthorization(config =>    
              {    
                config.AddPolicy(Policies.Admin, Policies.AdminPolicy());    
                config.AddPolicy(Policies.User, Policies.UserPolicy());    
              });    
             

            services.AddDbContext<AplicationDbContext>(opt =>{
                opt.UseSqlServer(Configuration.GetConnectionString("Default"));
            });
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
           /*  services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            }); */
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }
            
            app.UseCors("AllowEverything");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
