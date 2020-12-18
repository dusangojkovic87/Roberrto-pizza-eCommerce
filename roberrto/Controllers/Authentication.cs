using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Controllers
{
   [ApiController]
   [Route("[controller]")]
    public class Authentication : ControllerBase
    {
        private readonly SignInManager<StoreUser> _signInManager;
        private readonly UserManager<StoreUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        public Authentication(
            SignInManager<StoreUser> signInManager,
            UserManager<StoreUser> userManager,
            IConfiguration configuration,
            IMapper mapper)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;

        }


    [Route("register")]
    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegisterModel model){

        if(!ModelState.IsValid){
           return BadRequest(ModelState);
        }

        var userExist = await _userManager.FindByEmailAsync(model.Email);
        if(userExist == null){
            var user = _mapper.Map<StoreUser>(model);
            user.UserRole = "Customer";
            var result = await _userManager.CreateAsync(user,model.Password);
           if(result.Succeeded){
               return Ok(result);
           }else{
            return StatusCode(StatusCodes.Status500InternalServerError,new {error = "Failed,error on server"});
           }  
            
        }else{
            return BadRequest("User already exists!");
        }
    }


    [Route("login")]
    [HttpPost]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);

        }

        var user = await _userManager.FindByEmailAsync(model.Email);

        if (user != null)
        {
            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

            if (result.Succeeded)
            {
                //create token
             var claims = new[]{
                      new Claim(JwtRegisteredClaimNames.Sub,user.Email),
                      new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                      new Claim("role",user.UserRole)     
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:key"]));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Tokens:Issuer"],
                _configuration["Tokens:Audience"],
                claims,
                expires:DateTime.UtcNow.AddMinutes(120),
                signingCredentials:creds     
            );

            var results = new {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo,
                authenticated = true
               
            };

            return Created("",results);

            }
        }
        return BadRequest();
    }



}


}