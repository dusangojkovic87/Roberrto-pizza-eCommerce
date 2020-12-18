using System;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using roberrto.Entities;
using roberrto.Models;


namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Admin: ControllerBase
    {
        private  AplicationDbContext _context;
        private string _contentRoot;
      

        public Admin(AplicationDbContext context,IMapper mapper,IWebHostEnvironment env)
        {
            _context = context;
            _contentRoot = env.ContentRootPath;


         
            
        }

        [HttpPost]
        [Route("addProduct")]
        public async Task<IActionResult> addProduct([FromForm] ProductAddModel model)
        {
           

           if(!ModelState.IsValid){
               return BadRequest(model);
           }

           string uniqueFileName = UploadImage(model,_contentRoot);

           var newProduct = new Product{
               Name = model.Name,
               Type =model.Type,
               Description = model.Description,
               Category = model.Category,
               Img = uniqueFileName,
               Price = model.Price,
               TopOffer = model.TopOffer
           };

          var addProduct = await _context.Product.AddAsync(newProduct);
         
          if(await _context.SaveChangesAsync() > 0){
              return Ok("Product added!");
          }else{
              return BadRequest("Failed to add product!");
          }
        }


        private string UploadImage(ProductAddModel model,string root){
 
            string uniqueImgName = null;

            if(model.Img != null){
                string uploadFolder = Path.Combine(root + "/wwwroot" + "/images");
                uniqueImgName = Guid.NewGuid().ToString() + model.Img.FileName;
                string filePath = Path.Combine(uploadFolder,uniqueImgName);
                 using(var fileStream = new FileStream(filePath,FileMode.Create)){
                     model.Img.CopyTo(fileStream);
                }
            }



        return  uniqueImgName;
              
        }
        
        
    }
}