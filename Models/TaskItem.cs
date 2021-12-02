using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using NotesApp.Validation;

namespace NotesApp.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        [MinLength(1)]
        [MaxLength(30)]
        public string Title { get; set; }
        [MinLength(1)]
        [MaxLength(100)]
        public string Description { get; set; }        
        [DateLessThan("DateEnd", ErrorMessage = "Date not valid")]
        public DateTime DateStart { get; set; }        
        public DateTime DateEnd { get; set; }
        [RemindStringIsValid(ErrorMessage = "Remind string is not valid")]
        public string Remind { get; set; }   
        public bool IsCompleted { get; set; }
        public bool IsFailed { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "TagsId is not valid")]
        public int? TagsId { get; set; }
        
        public Tags Tags { get; set; }
    }
}
