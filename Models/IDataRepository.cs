using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Models
{
    public interface IDataRepository
    {
        IEnumerable<TaskItem> GetAllTaskItems { get; }
        TaskItem GetTaskItem(int id);
        void CreateTaskItem(TaskItem newTask);
        void UpdateTaskItem(TaskItem changedTask);
        void DeleteTaskItem(int id);

    }
}
