using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace StudentAPI
{
    public class Student
    {
        public int Id { get; set; }
        [Display(Name = "Прізвище")]
        public string LastName { get; set; }

        [Display(Name = "Ім'я")]
        public string FirstName { get; set; }

        [Display(Name = "По-батькові")]
        public string MiddleName { get; set; }

        [Display(Name = "Номер студентського")]
        public int StudentNumber { get; set; }

        [Display(Name = "Курс")]
        public int Course { get; set; }

        [Display(Name = "Кафедра")]
        public int DepartmentId { get; set; }

        [Display(Name = "Номер групи")]
        public string Group { get; set; }

        [Display(Name = "Спеціальність")]
        public string Specialty { get; set; }
    }
}