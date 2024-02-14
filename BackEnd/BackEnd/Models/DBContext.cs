using Microsoft.EntityFrameworkCore;

namespace BackEnd.Models



{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
           : base(options)
        {
        }
      
        public DbSet<Task> Tasks { get; set; }
        public DbSet<User> Users { get; set; }

       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed initial data for the Users table
            modelBuilder.Entity<User>().HasData(
             new User { UserId = 1, Email = "john.doe@example.com", Password = "password123" },
              new User { UserId = 2, Email = "jane.smith@example.com", Password = "qwerty456" },
                new User { UserId = 3, Email = "admin@example.com", Password = "admin123" }
);

            // Seed initial data for the Tasks table
            modelBuilder.Entity<Task>().HasData(
                new Task { id = 1, name = "Update project documentation", category = "Project Management", dueDate = "02/20/2024", estimate = "3 hours", importance = "high", status = "toDo", userId = 1 },
                new Task { id = 2, name = "Prepare presentation slides", category = "Presentation", dueDate = "02/25/2024", estimate = "5 hours", importance = "medium", status = "doing", userId = 1 },
                new Task { id = 3, name = "Review code changes", category = "Code Review", dueDate = "None", estimate = "1 hour", importance = "low", status = "done", userId = 1 },
                new Task { id = 4, name = "Attend team meeting", category = "Meetings", dueDate = "02/18/2024", estimate = "1.5 hours", importance = "medium", status = "toDo", userId = 2 },
                new Task { id = 5, name = "Write test cases", category = "Testing", dueDate = "02/22/2024", estimate = "2 hours", importance = "high", status = "doing", userId = 2 },
                new Task { id = 6, name = "Send status report to manager", category = "Reporting", dueDate = "02/21/2024", estimate = "30 minutes", importance = "low", status = "toDo", userId = 2 },
                new Task { id = 7, name = "Plan project timeline", category = "Project Management", dueDate = "02/24/2024", estimate = "4 hours", importance = "medium", status = "doing", userId = 3 },
                new Task { id = 8, name = "Research new technology trends", category = "Research", dueDate = "None", estimate = "3 hours", importance = "high", status = "done", userId = 3 }
            );  

        }

    }
}
