using System;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using roberrto.Entities;
using roberrto.Models;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Admin : ControllerBase
    {
        private string _contentRoot;

        private readonly IAdminRepository _admin;

        public Admin(IAdminRepository admin, IMapper mapper, IWebHostEnvironment env)
        {
            _admin = admin;
            
            _contentRoot = env.ContentRootPath;
        }

        [HttpPost]
        [Route("addProduct")]
        public IActionResult addProduct([FromForm] ProductAddModel model)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }

            string uniqueFileName = UploadImage(model, _contentRoot);

            var newProduct = new Product
            {
                Name = model.Name,
                Type = model.Type,
                Description = model.Description,
                Category = model.Category,
                Img = uniqueFileName,
                Price = model.Price,
                TopOffer = model.TopOffer
            };

            try
            {
                 _admin.addProduct(newProduct);
                 return Ok(new {message = "Product added!"});
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500,new {error = "Server error,product not added!"});                         
            }                         
        }


        private string UploadImage(ProductAddModel model, string root)
        {

            string uniqueImgName = null;

            if (model.Img != null)
            {
                string uploadFolder = Path.Combine(root + "/wwwroot" + "/images");
                uniqueImgName = Guid.NewGuid().ToString() + model.Img.FileName;
                string filePath = Path.Combine(uploadFolder, uniqueImgName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.Img.CopyTo(fileStream);
                }
            }



            return uniqueImgName;

        }

        private string UploadTeamMemberImage(TeamMemberAddModel model, string root)
        {

            string uniqueImgName = null;

            if (model.Img != null)
            {
                string uploadFolder = Path.Combine(root + "/wwwroot" + "/images" + "/members");
                uniqueImgName = Guid.NewGuid().ToString() + model.Img.FileName;
                string filePath = Path.Combine(uploadFolder, uniqueImgName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.Img.CopyTo(fileStream);
                }
            }



            return uniqueImgName;

        }

        [HttpDelete]
        [Route("delete-product")]

        public IActionResult removeProduct([FromBody] ProductModel model )
        {
            try
            {
                 _admin.deleteProduct(model);   
                 return Ok(new {message = "Product deleted!"});       
            }
            catch (Exception e)
            {
               Console.WriteLine(e);
               return StatusCode(500,new {error = "Server error,product not deleted!"});           
                
            }                
        }


        [HttpPost]
        [Route("add-member")]
        public IActionResult addTeamMember([FromForm] TeamMemberAddModel model){

            string uniqueMemberImgName = UploadTeamMemberImage(model,_contentRoot);

            var tmember = new TeamMember{
                FullName = model.FullName,
                Job = model.Job,
                Img = uniqueMemberImgName,
                Email = model.Email
            };

            try
            {
                 _admin.addTeamMember(tmember);  
                 return Ok(new {message = "Member added!"});      
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500,new {error = "Server error,member not added!"});                   
            }           
        }



        [HttpPost]
        [Route("add-review")]
        public IActionResult addReview([FromBody] ClientReviewAddModel model){      
            try
            {
                 _admin.addClientReview(model);
                 return Ok(new {message = "Client added!"});            
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500,new {error = "Server error,client not added!"});          
            }         
        }


        [HttpPost]
        [Route("add-gallery-img")]
        public IActionResult addGalleryImg([FromForm] GalleryImgAddModel model){
            string uniqeImgName = UploadGalleryImg(model,_contentRoot);

            var galleryImg = new Gallery{
              Img = uniqeImgName
            };

            try
            {
                 _admin.addImgToGallery(galleryImg);
                 return Ok("Image added!");     
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500,new {error = "Server error,img not added!"});                       
            }
        }
        

        private string UploadGalleryImg(GalleryImgAddModel model,string root){
            string uniquegalleryImgName = null;

            if(model.Img != null){
                string uploadFolder = Path.Combine(root + "/wwwroot" + "/images" + "/gallery");
                uniquegalleryImgName = Guid.NewGuid().ToString() + model.Img.FileName;
                string filePath = Path.Combine(uploadFolder, uniquegalleryImgName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.Img.CopyTo(fileStream);
                }

            }

            return uniquegalleryImgName;

         }



    }

    
}