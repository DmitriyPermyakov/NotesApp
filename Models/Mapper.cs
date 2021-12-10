using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NotesApp.Models;

namespace NotesApp.Models
{
    public class Mapper
    {
        private ITagDataRepository repository;
        public Mapper(ITagDataRepository repository)
        {
            this.repository = repository;
        }
        public TaskItem MapTask(MappedTaskItem mappedTaskItem)
        {
            string tag = repository.GetTag(mappedTaskItem.Tag).Name;
            TaskItem taskItem = new TaskItem()
            { 
                Id = 0,
                Title = mappedTaskItem.Title,
                Description = mappedTaskItem.Description,
                DateStart = mappedTaskItem.DateStart,
                DateEnd = mappedTaskItem.DateEnd,
                Remind = mappedTaskItem.RemindBefore,
                Tag = tag
            };

            return taskItem;
        }
    }
}
