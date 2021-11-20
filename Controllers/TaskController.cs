using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NotesApp.Models;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;


namespace NotesApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private static readonly TaskItem[] tasks = new TaskItem[]
        {
            new TaskItem
            {
                Title = "Make the program",
                Description = "Make the best program in the world" ,
                DateStart = new DateTime(2021, 11, 01),
                DateEnd = new DateTime(2021, 12, 01),
                Remind = "never",
                Tags = new string[] { "programming", "coding" }
             },
            new TaskItem
            {
                Title = "Buy the car",
                Description = "Buy new car in Mersedess shop",
                DateStart = new DateTime(2022, 01, 12),
                DateEnd = new DateTime(2022, 02, 01),
                Remind = "one day",
                Tags = new string[] { "driving", "car" }
            },
            new TaskItem
            {
                Title = "Get a job",
                Description = "Get a new job in IT",
                DateStart = new DateTime(2020, 04, 20),
                DateEnd = new DateTime(2022, 02, 01),
                Remind = "two days",
                Tags = new string[] { "job", "education" }
            }
        };
        private readonly ILogger<TaskController> _logger;

        private TaskDatabaseContext context;

        public TaskController(TaskDatabaseContext context, ILogger<TaskController> logger)
        {
            this.context = context;
            this._logger = logger;
        }
    }
}
