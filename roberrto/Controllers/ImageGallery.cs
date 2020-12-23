using System;
using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageGallery : ControllerBase
    {
        public IGalleryRepository _gallery;
        public ImageGallery(IGalleryRepository gallery)
        {
              _gallery = gallery;

        }


    [HttpGet]
    [Route("images")]
    public IActionResult getImages(){
      try
      {
          var images = _gallery.GetGalleryImages();
          return Ok(images);
          
      }
      catch (Exception e)
      {
          System.Console.WriteLine(e);
          return StatusCode(500,new {error = "Server error,cannot get images!"});
         
      }

    }
      
}


    
}