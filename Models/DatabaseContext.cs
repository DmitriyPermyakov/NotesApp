using System;
using Microsoft.EntityFrameworkCore;
using NotesApp.Models;

namespace NotesApp.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) 
        {
            //Database.EnsureDeleted();
            //Database.EnsureCreated();
        }
        public DbSet<TaskItem> TaskItem { get; set; }
        public DbSet<Tags> Tags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Tags>().HasData(
            //    new Tags() { Id = 1, Name = "Programming" },
            //    new Tags() { Id = 2, Name = "Travelling" },
            //    new Tags() { Id = 3, Name = "Education" });

            //modelBuilder.Entity<TaskItem>().HasData(
            //    new TaskItem()
            //    {
            //        Id = 1,
            //        Title = "Create a program",
            //        Description = "Create the best programm",
            //        DateStart = new DateTime(2021, 11, 1),
            //        DateEnd = new DateTime(2021, 12, 15),
            //        IsCompleted = false,
            //        IsFailed = false,
            //        Remind = "never",
            //        TagsId = 1
            //    },
            //    new TaskItem()
            //    {
            //        Id = 2,
            //        Title = "Visit Moscow",
            //        Description = "Visit Moscow in January",
            //        DateStart = new DateTime(2022, 01, 1),
            //        DateEnd = new DateTime(2022, 01, 15),
            //        IsCompleted = false,
            //        IsFailed = false,
            //        Remind = "one day",
            //        TagsId = 2
            //    },
            //    new TaskItem()
            //    {
            //        Id = 3,
            //        Title = "Get a job",
            //        Description = "Get a job in SimbirSoft",
            //        DateStart = new DateTime(2022, 02, 1),
            //        DateEnd = new DateTime(2022, 02, 15),
            //        IsCompleted = false,
            //        IsFailed = false,
            //        Remind = "two days",
            //        TagsId = 3
            //    });
        }
    }
}
