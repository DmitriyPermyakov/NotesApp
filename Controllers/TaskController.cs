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
        private readonly ILogger<TaskController> _logger;

        private IDataRepository repository;

        public TaskController(IDataRepository repository, ILogger<TaskController> logger)
        {
            this.repository = repository;
            this._logger = logger;            
        }

        [HttpGet]
        public IEnumerable<TaskItem> GetAll()
        {
            return repository.GetAllTaskItems;
        }

        [HttpGet("id")]
        public TaskItem GetTaskItem(int id)
        {
            return repository.GetTaskItem(id);
        }

        [HttpPost]
        public void CreateTaskItem([FromBody] TaskItem taskItem)
        {
            repository.CreateTaskItem(taskItem);           
        }

        [HttpDelete("id")]
        public void DeleteTaskItem(int id)
        {
            repository.DeleteTaskItem(id);
        }
    }
}
