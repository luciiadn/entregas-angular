import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { course } from 'src/app/models/courses-model';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  courses: course[] =[
    new course (1, 'Trelawney', 'Adivinacion', true),
    new course (2, 'Flitwick', 'Encantamiento', true),
    new course (3, 'Hooch', 'Vuelo', false),
    new course (4, 'Sinistra', 'Astronomía', false),
    new course (5, 'Snape', 'Pociones', true),
    new course (6, 'Sprout', 'Herbología', true),
  ];

  displayedColumns = [
    'id',
    'profesor',
    'materia',
    'timos',
    'edit',
    'delete'
  ];

  constructor (private readonly dialogService: MatDialog) {}

  addCourse() {
    const dialog = this.dialogService.open(CoursesPageComponent);
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.courses[this.courses.length -1]?.id;

          this.courses =[
            ...this.courses,
            new course (
              lastId +1,
              value.profesor,
              value.materia,
              true
            ),
          ];
        }
      });
    }

    removeCourse(course: course) {
      this.courses =this.courses.filter((cour) => cour.id !== course.id);
    }

    editCourse (course: course){
      const dialog = this.dialogService.open(CoursesPageComponent,
        {data: course}
      );

      dialog.afterClosed().subscribe((data) => {
        this.courses = this.courses.map ((cour)=>
        cour.id === course.id ? {...cour,...data} : cour
        );
      });
    }
  }



