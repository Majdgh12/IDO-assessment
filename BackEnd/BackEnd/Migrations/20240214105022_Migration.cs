using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEnd.Migrations
{
    public partial class Migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dueDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estimate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    importance = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "Tasks",
                columns: new[] { "id", "category", "dueDate", "estimate", "importance", "name", "status", "userId" },
                values: new object[,]
                {
                    { 1, "Project Management", "02/20/2024", "3 hours", "high", "Update project documentation", "toDo", 1 },
                    { 2, "Presentation", "02/25/2024", "5 hours", "medium", "Prepare presentation slides", "doing", 1 },
                    { 3, "Code Review", "None", "1 hour", "low", "Review code changes", "done", 1 },
                    { 4, "Meetings", "02/18/2024", "1.5 hours", "medium", "Attend team meeting", "toDo", 2 },
                    { 5, "Testing", "02/22/2024", "2 hours", "high", "Write test cases", "doing", 2 },
                    { 6, "Reporting", "02/21/2024", "30 minutes", "low", "Send status report to manager", "toDo", 2 },
                    { 7, "Project Management", "02/24/2024", "4 hours", "medium", "Plan project timeline", "doing", 3 },
                    { 8, "Research", "None", "3 hours", "high", "Research new technology trends", "done", 3 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Password" },
                values: new object[,]
                {
                    { 1, "john.doe@example.com", "password123" },
                    { 2, "jane.smith@example.com", "qwerty456" },
                    { 3, "admin@example.com", "admin123" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
