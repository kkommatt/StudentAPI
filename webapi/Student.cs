using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace StudentAPI
{
    public class Student
    {
        public int Id { get; set; }
        [Display(Name = "�������")]
        public string LastName { get; set; }

        [Display(Name = "��'�")]
        public string FirstName { get; set; }

        [Display(Name = "��-�������")]
        public string MiddleName { get; set; }

        [Display(Name = "����� �������������")]
        public int StudentNumber { get; set; }

        [Display(Name = "����")]
        public int Course { get; set; }

        [Display(Name = "�������")]
        public int DepartmentId { get; set; }

        [Display(Name = "����� �����")]
        public string Group { get; set; }

        [Display(Name = "������������")]
        public string Specialty { get; set; }
    }
}