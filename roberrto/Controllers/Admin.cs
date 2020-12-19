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

              var saved =  _admin.addProduct(newProduct);
              if(saved){
                  return Ok("Product Added");
              }else{
                  return BadRequest("Error,product not saved!");
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
            if(_admin.deleteProduct(model)){
                return Ok("Product deleted!");
            }else{
                return BadRequest("Error,product not deleted!");
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

            if(_admin.addTeamMember(tmember)){
                return Ok("Team Member added!");
            }else{
                return BadRequest("Error,team member not added!");
            }
        }

        [HttpPost]
        [Route("add-review")]
        public IActionResult addReview([FromBody] ClientReviewAddModel model){
            if(_admin.addClientReview(model)){
                return Ok("Review added");
            }else{
                return BadRequest("Error,review not added!");
            }
        }
    }
}