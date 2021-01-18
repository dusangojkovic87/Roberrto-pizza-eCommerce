using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using roberrto.Services;

namespace roberrto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Team : ControllerBase
    {
        public ITeamMembersRepository _teamMembers;
        private readonly ILogger<Team> _logger;
        public Team(ITeamMembersRepository teamMembers, ILogger<Team> logger)
        {
            _logger = logger;
            _teamMembers = teamMembers;

        }
        [HttpGet]
        [Route("members")]

        public IActionResult GetTeamMembers()
        {
            try
            {
                var members = _teamMembers.GetTeamMembers();
                return Ok(members);

            }
            catch (Exception e)
            {
               _logger.LogWarning(e.ToString());
                return StatusCode(500, new { error = "Cannot get Team Members,server error!" });

            }

        }
    }
}