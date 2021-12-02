using System.Collections.Generic;

namespace NotesApp.Models
{
    public interface ITaskDataRepository
    {
        IEnumerable<TaskItem> GetAllTaskItems { get; }
        TaskItem GetTaskItem(int id);
        void CreateTaskItem(TaskItem newTask);
        void UpdateTaskItem(TaskItem changedTask);
        void DeleteTaskItem(int id);

    }
}
