import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/student-model';
import { StudentModalComponent } from 'src/app/shared/components/student-modal/student-modal.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students: Student[] = [
    new Student(1, 'Harry', 'Potter', true, '12', '80'),
    new Student(2, 'Hermione', 'Granger', true, '1', '100'),
    new Student(3, 'Albus', 'Dumbledore', false, '25', '100'),
    new Student(4, 'Severus', 'Snape', false, '0', '95'),
    new Student(5, 'Draco', 'Malfoy', true, '7', '60'),
    new Student(4, 'Fred', 'weasly', false, '33', '15'),
  ];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'isActive',
    'absence',
    'notes',
    'edit',
    'delete',
  ];

  constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentModalComponent);

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;

        this.students = [
          ...this.students,
          new Student(
            lastId + 1,
            value.firstName,
            value.lastName,
            true,
            value.absence,
            value.notes
          ),
        ];
      }
    });
  }

  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentModalComponent, {
      data: student,
    });

    dialog.afterClosed().subscribe((data) => {
      this.students = this.students.map((stu) =>
        stu.id === student.id ? { ...stu, ...data } : stu
      );
    });
  }
}
