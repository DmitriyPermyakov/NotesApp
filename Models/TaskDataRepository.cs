using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NotesApp.Models
{
    public class TaskDataRepository : ITaskDataRepository
    {
        private DatabaseContext context;
        public TaskDataRepository(DatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<TaskItem> GetAllTaskItems => context.TaskItem.Include(t => t.Tags);
        public TaskItem GetTaskItem(int id) => this.context.TaskItem.Include(t => t.Tags).First(t => t.Id == id);        

        public void CreateTaskItem(TaskItem newTask)
        {
            newTask.Id = 0;
            newTask.IsCompleted = false;
            newTask.IsFailed = false;
            newTask.Tags = null;
            context.Add(newTask);            
            context.SaveChanges();
        }

        public void UpdateTaskItem(TaskItem changedTask)
        {
            
        }

        public void DeleteTaskItem(int id)
        {            
            context.TaskItem.Remove(new TaskItem { Id = id });
            context.SaveChanges();
        }
    }
}
