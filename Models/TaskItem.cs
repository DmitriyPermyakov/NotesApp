using System;

namespace NotesApp.Models
{
    public class TaskItem
    {
        public int Id { get; set; }        
        public string Title { get; set; }        
        public string Description { get; set; }        
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }        
        public string Remind { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsFailed { get; set; }
        public string Tag { get; set; }       
    }
}
