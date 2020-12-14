using Microsoft.AspNetCore.Authorization;

namespace roberrto.Models
{
    
        public static class Policies    
    {    
        public const string Admin = "Admin";    
        public const string User = "Customer";    
    
        public static AuthorizationPolicy AdminPolicy()    
        {    
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();    
        }    
    
        public static AuthorizationPolicy UserPolicy()    
        {    
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(User).Build();    
        }    
    } 

}   
    
