using System;
using Microsoft.AspNetCore.Mvc;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamMembers : ControllerBase
    {
        public ITeamMembersRepository _teamMembers;
        public TeamMembers(ITeamMembersRepository TeamMembers)
        {
           _teamMembers = TeamMembers;

        }

        [HttpGet]
        [Route("get-team-members")]
        public IActionResult getTeamMembers(){
           try
           {
              var members = _teamMembers.GetTeamMembers();
               return Ok(members);
           }
           catch (Exception e)
           {
              Console.WriteLine(e);
              return BadRequest("Error,cannot get users!");      
           }
        }

    }
}