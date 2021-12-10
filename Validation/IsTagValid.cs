using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using NotesApp.Models;

namespace NotesApp.Validation
{
    public class IsTagValid : ValidationAttribute
    {        
        

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ITagDataRepository repository = (ITagDataRepository)validationContext.GetService(typeof(ITagDataRepository));
            ErrorMessage = ErrorMessageString;
            int[] Ids = repository.GetIds();            
            if(!Ids.Contains((int)value))
            {
                return new ValidationResult(ErrorMessage);                
            }

            return ValidationResult.Success;
        }
    }
}
