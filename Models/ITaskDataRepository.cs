using System.Collections.Generic;

namespace NotesApp.Models
{
    public interface ITaskDataRepository
    {
        IEnumerable<TaskItem> GetAllTaskItems { get; }
        TaskItem GetTaskItem(int id);
        TaskItem CreateTaskItem(TaskItem newTask);
        void UpdateTaskItem(TaskItem changedTask);
        void DeleteTaskItem(TaskItem task);

    }
}
