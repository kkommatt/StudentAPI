import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
interface Student {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  studentNumber: number;
  course: number;
  departmentId: number;
  group: string;
  specialty: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rasyue';
  apiURL = 'https://localhost:7011/api/'
  isCreate: boolean = false
  isEdit: boolean = false

  newStudentlastName: string = ''
  newStudentfirstName: string = ''
  newStudentmiddleName: string = ''
  newStudentstudentNumber: number = 0
  newStudentcourse: number = 0
  newStudentdepartmentId: number = 0
  newStudentgroup: string = ''
  newStudentspecialty: string = ''


  editId: number = 0
  editStudentlastName: string = ''
  editStudentfirstName: string = ''
  editStudentmiddleName: string = ''
  editStudentstudentNumber: number = 0
  editStudentcourse: number = 0
  editStudentdepartmentId: number = 0
  editStudentgroup: string = ''
  editStudentspecialty: string = ''

  studentsArray: { id: number, lastName: string, firstName: string, middleName: string, studentNumber: number, course: number, departmentId: number, group: string, specialty: string }[] = []

  constructor(
    private httpClient: HttpClient
  ) {

    this.httpClient.get<Student[]>(`${this.apiURL}Students`)
      .subscribe(
        (students: Student[]) => {
          this.studentsArray = students;
        }
      );


  }

  createNewStudent() {

    this.httpClient.post(`${this.apiURL}Students`,
      {
        LastName: this.newStudentlastName,
        FirstName: this.newStudentfirstName,
        MiddleName: this.newStudentmiddleName,
        StudentNumber: this.newStudentstudentNumber,
        Course: this.newStudentcourse,
        DepartmentId: this.newStudentdepartmentId,
        Group: this.newStudentgroup,
        Specialty: this.newStudentspecialty,
      })
      .subscribe(() => {

        this.httpClient.get(`${this.apiURL}Students`)
          .subscribe((resp: any) => {
            this.studentsArray = resp

          })

      })

    this.isCreate = false
    this.newStudentlastName = ''
    this.newStudentfirstName = ''
    this.newStudentmiddleName = ''
    this.newStudentstudentNumber = 0
    this.newStudentcourse = 0
    this.newStudentdepartmentId = 0
    this.newStudentgroup = ''
    this.newStudentspecialty = ''
  }


  editStudent() {
    this.httpClient.put(`${this.apiURL}Students/${this.editId}`,
      {
        Id: this.editId,
        LastName: this.editStudentlastName,
        FirstName: this.editStudentfirstName,
        MiddleName: this.editStudentmiddleName,
        StudentNumber: this.editStudentstudentNumber,
        Course: this.editStudentcourse,
        DepartmentId: this.editStudentdepartmentId,
        Group: this.editStudentgroup,
        Specialty: this.editStudentspecialty,
      })
      .subscribe(() => {
            this.httpClient.get<Student[]>(`${this.apiURL}Students`)
              .subscribe(
                (students: Student[]) => {
                  this.studentsArray = students;
                }
              )
      })
    this.isEdit = false
    this.editStudentlastName = ''
    this.editStudentfirstName = ''
    this.editStudentmiddleName = ''
    this.editStudentstudentNumber = 0
    this.editStudentcourse = 0
    this.editStudentdepartmentId = 0
    this.editStudentgroup = ''
    this.editStudentspecialty = ''
  }

  deleteStudent(id: number) {
    this.httpClient.delete(`${this.apiURL}Students/${id}`)
      .subscribe(() => {
        this.httpClient.get<Student[]>(`${this.apiURL}Students`)
          .subscribe(
            (students: Student[]) => {
              this.studentsArray = students;
            }
          )

      })
  }

  edit(input: { id: number, lastName: string, firstName: string, middleName: string, studentNumber: number, course: number, departmentId: number, group: string, specialty: string }) {

    this.editId = input.id
    this.editStudentlastName = input.lastName
    this.editStudentfirstName = input.firstName
    this.editStudentmiddleName = input.middleName
    this.editStudentstudentNumber = input.studentNumber
    this.editStudentcourse = input.course
    this.editStudentdepartmentId = input.departmentId
    this.editStudentgroup = input.group
    this.editStudentspecialty = input.specialty

    this.isEdit = true
  }

}
