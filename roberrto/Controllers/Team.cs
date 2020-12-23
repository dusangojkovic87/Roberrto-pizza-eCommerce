using System;
using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Team:ControllerBase
    {
        public ITeamMembersRepository _teamMembers;
        public Team(ITeamMembersRepository teamMembers)
        {
            _teamMembers = teamMembers;
            
        }
        [HttpGet]
        [Route("members")]

        public IActionResult GetTeamMembers(){
            try
            {
                var members = _teamMembers.GetTeamMembers();
                return Ok(members);
                
            }
            catch (Exception e)
            {
              Console.WriteLine(e);
              return StatusCode(500,new {error = "Cannot get Team Members,server error!"});
            
            }
        
        }     
    }   
}