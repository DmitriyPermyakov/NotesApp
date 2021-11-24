using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

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
        [NotMapped]
        public string[] Tags { get; set; }
    }
}
