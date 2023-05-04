using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NetCoreApi.Model;

namespace NetCoreApi.Data
{
    public class NetCoreApiContext : DbContext
    {
        public NetCoreApiContext (DbContextOptions<NetCoreApiContext> options)
            : base(options)
        {
        }

        public DbSet<NetCoreApi.Model.Blog> Blog { get; set; } = default!;
    }
}
