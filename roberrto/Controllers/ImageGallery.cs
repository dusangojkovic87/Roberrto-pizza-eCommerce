using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageGallery : ControllerBase
    {
        public IGalleryRepository _gallery;
        private readonly ILogger<ImageGallery> _logger;
        public ImageGallery(IGalleryRepository gallery, ILogger<ImageGallery> logger)
        {
             _logger = logger;
            _gallery = gallery;

        }


        [HttpGet]
        [Route("images")]
        public IActionResult getImages()
        {
            try
            {
                var images = _gallery.GetGalleryImages();
                return Ok(images);

            }
            catch (Exception e)
            {
                _logger.LogWarning(e.ToString());
                return StatusCode(500, new { error = "Server error,cannot get images!" });

            }

        }

    }



}