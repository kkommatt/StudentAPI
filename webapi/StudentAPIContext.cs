using Microsoft.EntityFrameworkCore;

namespace StudentAPI
{
    public class StudentAPIContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        public StudentAPIContext(DbContextOptions<StudentAPIContext> options) : base(options)
        {
        }
    }
}
