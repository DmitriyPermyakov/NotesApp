using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Models
{
    public class DataRepository : IDataRepository
    {
        private TaskDatabaseContext context;
        public DataRepository(TaskDatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<TaskItem> GetAllTaskItems => context.TaskItem;
        public TaskItem GetTaskItem(int id)
        {
            return this.context.TaskItem.Find(id);
        }

        public void CreateTaskItem(TaskItem newTask)
        {
            TaskItem taskItem = newTask;
            context.Add(taskItem);
            context.SaveChanges();
        }

        public void UpdateTaskItem(TaskItem changedTask)
        {
            
        }

        public void DeleteTaskItem(int id)
        {
            context.Remove(GetTaskItem(id));
            context.SaveChanges();
        }
    }
}
