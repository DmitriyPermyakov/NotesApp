using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NotesApp.Models;


namespace NotesApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {               

        private ITaskDataRepository repository;

        public TaskController(ITaskDataRepository repository)
        {
            this.repository = repository;                   
        }

        [HttpGet]
        public IEnumerable<TaskItem> GetAll()
        {
            return repository.GetAllTaskItems;
        }

        [HttpGet("{id}")]
        public TaskItem GetTaskItem(int id)
        {            
            return repository.GetTaskItem(id);
        }

        [HttpPost]
        public void CreateTaskItem([FromBody] TaskItem taskItem)
        {
            if(ModelState.IsValid)
            {
                repository.CreateTaskItem(taskItem);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteTaskItem(int id)
        {
            repository.DeleteTaskItem(id);
        }
    }
}
