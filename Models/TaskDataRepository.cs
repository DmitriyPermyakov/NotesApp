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

        public TaskItem CreateTaskItem(TaskItem newTask)
        {
            newTask.Id = 0;
            newTask.IsCompleted = false;
            newTask.IsFailed = false;
            newTask.Tags = null;
            context.TaskItem.Add(newTask);        
            
            context.SaveChanges();

            return context.TaskItem.Find(newTask.Id);
        }

        public void UpdateTaskItem(TaskItem changedTask)
        {
            
        }

        public void DeleteTaskItem(TaskItem task)
        {            
            context.TaskItem.Remove(task);
            context.SaveChanges();
        }
    }
}
