using System;
using System.ComponentModel.DataAnnotations;

namespace NotesApp.Validation
{
    public class DateLessThanAttribute : ValidationAttribute
    {
        private readonly string comparisonProperty;

        public DateLessThanAttribute(string comparisonProperty)
        {
            this.comparisonProperty = comparisonProperty;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ErrorMessage = ErrorMessageString;
            DateTime dateStart = (DateTime)value;
            var prop = validationContext.ObjectType.GetProperty(comparisonProperty);

            if(prop == null)
            {
                throw new ArgumentException("Property with this name doesn't exist");
            }

            DateTime dateEnd = (DateTime)prop.GetValue(validationContext.ObjectInstance);

            if(DateTime.Compare(dateStart, dateEnd) >= 0)
            {                
                return new ValidationResult(ErrorMessage);
            }

            return ValidationResult.Success;
        }
    }
}
