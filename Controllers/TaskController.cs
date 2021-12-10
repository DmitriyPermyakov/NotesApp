﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NotesApp.Models;
using System;


namespace NotesApp.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {               

        private ITaskDataRepository repository;
        private ITagDataRepository tagRepository;

        public TaskController(ITaskDataRepository repository, ITagDataRepository tagDataRepository)
        {
            this.repository = repository;
            this.tagRepository = tagDataRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<TaskItem> tasks = repository.GetAllTaskItems;
            if(tasks == null)
            {
                return NotFound("Not any task found");
            }
            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public IActionResult GetTaskItem(int id)
        {
            TaskItem task = repository.GetTaskItem(id);
            if(task == null)
            {
                return NotFound($"Task with id {id} not found");
            }
            return Ok(task);
        }

        [HttpPost]
        public ActionResult CreateTaskItem([FromBody] MappedTaskItem taskItem)
        {
            if(ModelState.IsValid)
            {
                Mapper mapper = new Mapper(tagRepository);

                TaskItem task = repository.CreateTaskItem(mapper.MapTask(taskItem));
                var routeValue = new { Id = task.Id };
                return CreatedAtAction(nameof(GetTaskItem), routeValue, task);
            }
            else
            {                
                return BadRequest(taskItem);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTaskItem(int id)
        {
            TaskItem task = repository.GetTaskItem(id);
            if(task == null)
            {
                return NotFound($"Object with id {id} not found");
            }
            repository.DeleteTaskItem(task);
            return Ok();
        }
    }
}
