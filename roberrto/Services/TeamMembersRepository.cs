using System.Collections.Generic;
using System.Linq;
using roberrto.Entities;
using roberrto.Models;

namespace roberrto.Services
{
    public interface ITeamMembersRepository
    {
        IEnumerable<TeamMember> GetTeamMembers();
    }
    public class TeamMembersRepository : ITeamMembersRepository
    {
        private readonly AplicationDbContext _context;
        public TeamMembersRepository(AplicationDbContext context)
        {
            _context = context;

        }

        public IEnumerable<TeamMember> GetTeamMembers()
        {
          return  _context.TeamMember.ToList();
        }
    }
}