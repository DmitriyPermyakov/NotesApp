using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace NotesApp.Validation
{    
    public class RemindStringIsValid : ValidationAttribute
    {
        private string[] remindBefore = new[] { "never", "one day", "two days", "three days" };
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string comparingString = (string)value;
            ErrorMessage = ErrorMessageString;
            if(!remindBefore.Contains(comparingString.ToLower()))
            {
                return new ValidationResult(ErrorMessage);
            }

            return ValidationResult.Success;
        }

    }
}
