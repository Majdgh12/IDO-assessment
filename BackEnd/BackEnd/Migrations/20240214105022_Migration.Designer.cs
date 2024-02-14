﻿// <auto-generated />
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BackEnd.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20240214105022_Migration")]
    partial class Migration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BackEnd.Models.Task", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dueDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estimate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("importance")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("userId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Tasks");

                    b.HasData(
                        new
                        {
                            id = 1,
                            category = "Project Management",
                            dueDate = "02/20/2024",
                            estimate = "3 hours",
                            importance = "high",
                            name = "Update project documentation",
                            status = "toDo",
                            userId = 1
                        },
                        new
                        {
                            id = 2,
                            category = "Presentation",
                            dueDate = "02/25/2024",
                            estimate = "5 hours",
                            importance = "medium",
                            name = "Prepare presentation slides",
                            status = "doing",
                            userId = 1
                        },
                        new
                        {
                            id = 3,
                            category = "Code Review",
                            dueDate = "None",
                            estimate = "1 hour",
                            importance = "low",
                            name = "Review code changes",
                            status = "done",
                            userId = 1
                        },
                        new
                        {
                            id = 4,
                            category = "Meetings",
                            dueDate = "02/18/2024",
                            estimate = "1.5 hours",
                            importance = "medium",
                            name = "Attend team meeting",
                            status = "toDo",
                            userId = 2
                        },
                        new
                        {
                            id = 5,
                            category = "Testing",
                            dueDate = "02/22/2024",
                            estimate = "2 hours",
                            importance = "high",
                            name = "Write test cases",
                            status = "doing",
                            userId = 2
                        },
                        new
                        {
                            id = 6,
                            category = "Reporting",
                            dueDate = "02/21/2024",
                            estimate = "30 minutes",
                            importance = "low",
                            name = "Send status report to manager",
                            status = "toDo",
                            userId = 2
                        },
                        new
                        {
                            id = 7,
                            category = "Project Management",
                            dueDate = "02/24/2024",
                            estimate = "4 hours",
                            importance = "medium",
                            name = "Plan project timeline",
                            status = "doing",
                            userId = 3
                        },
                        new
                        {
                            id = 8,
                            category = "Research",
                            dueDate = "None",
                            estimate = "3 hours",
                            importance = "high",
                            name = "Research new technology trends",
                            status = "done",
                            userId = 3
                        });
                });

            modelBuilder.Entity("BackEnd.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Email = "john.doe@example.com",
                            Password = "password123"
                        },
                        new
                        {
                            UserId = 2,
                            Email = "jane.smith@example.com",
                            Password = "qwerty456"
                        },
                        new
                        {
                            UserId = 3,
                            Email = "admin@example.com",
                            Password = "admin123"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
