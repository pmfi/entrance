import { Component, Input } from '@angular/core';

import { Student } from '../../data/Student';

@Component({
  selector: '[student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent {
  @Input()
  student: Student;
}
