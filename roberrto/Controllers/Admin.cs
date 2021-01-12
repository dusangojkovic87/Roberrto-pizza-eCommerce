using System;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
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

        [HttpGet]
        [Route("get-products")]
        public IActionResult getProducts()
        {
            try
            {
                var products = _admin.getProducts();
                return Ok(products);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,cannot get products!" });

            }

        }




        [HttpPost]
        [Route("addProduct")]
        public IActionResult addProduct([FromForm] ProductAddModel model)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }

            var pathToSave = "/wwwroot/images/";

            string uniqueFileName = UploadImage(model.Img, _contentRoot, pathToSave);

            var newProduct = new Product
            {
                Name = model.Name,
                Description = model.Description,
                Category = model.Category,
                Img = uniqueFileName,
                Price = model.Price,
                TopOffer = model.TopOffer
            };

            try
            {
                _admin.addProduct(newProduct);
                return Ok(new { message = "Product added!" });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,product not added!" });
            }
        }

        private string UploadImage(IFormFile img, string root, string pathToSave)
        {

            string uniqueImgName = null;

            if (img != null)
            {
                string uploadFolder = Path.Combine(root + pathToSave);
                uniqueImgName = Guid.NewGuid().ToString() + img.FileName;
                string filePath = Path.Combine(uploadFolder, uniqueImgName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    img.CopyTo(fileStream);
                }
            }



            return uniqueImgName;

        }

        [HttpDelete]
        [Route("remove-product/{id:int}")]

        public IActionResult removeProduct([FromRoute] int id)
        {
            try
            {
                var productId = id;
                _admin.deleteProduct(productId);
                return Ok(new { message = "Product deleted!" });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,product not deleted!" });

            }
        }


        [HttpPost]
        [Route("add-member")]
        public IActionResult addTeamMember([FromForm] TeamMemberAddModel model)
        {
            var pathToSave = "/wwwroot/images/members";

            string uniqueMemberImgName = UploadImage(model.Img, _contentRoot, pathToSave);

            var tmember = new TeamMember
            {
                FullName = model.FullName,
                Job = model.Job,
                Img = uniqueMemberImgName,
                Email = model.Email
            };

            try
            {
                _admin.addTeamMember(tmember);
                return Ok(new { message = "Member added!" });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,member not added!" });
            }
        }



        [HttpPost]
        [Route("add-review")]
        public IActionResult addReview([FromBody] ClientReviewAddModel model)
        {
            try
            {
                _admin.addClientReview(model);
                return Ok(new { message = "Client added!" });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, new { error = "Server error,client not added!" });
            }
        }


        [HttpPost]
        [Route("add-gallery-img")]
        public IActionResult addGalleryImg([FromForm] GalleryImgAddModel model)
        {
            string pathToSave = "/wwwroot/images/gallery";
            string uniqeImgName = UploadImage(model.Img, _contentRoot, pathToSave);

            var galleryImg = new Gallery
            {
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
                return StatusCode(500, new { error = "Server error,img not added!" });
            }
        }
    }
}