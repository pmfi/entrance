import {Component, OnInit} from '@angular/core';

import {Student} from '../../data/Student';
import {Speciality} from '../../data/Speciality';
import {StudentFilter} from '../../data/StudentFilter';

import {AdmissionsCommitteeService} from '../../services/admissions-committee.service';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  constructor(private admissionService: AdmissionsCommitteeService) {
  }

  specialities: Speciality[];
  students: Student[];

  filterStudents(surname: string, specialityId: number) {
    const filter = new StudentFilter();
    filter.surname = surname;
    filter.specialityId = specialityId;

    this.admissionService.getStudents(filter)
      .then(result => this.students = result)
      .catch(errMessage => alert(errMessage));
  }

  ngOnInit() {
    const filter = new StudentFilter();

    this.admissionService.getSpecialities()
      .then(result => this.specialities = result)
      .then(() => filter.specialityId = this.specialities[0].id)
      .then(() => this.admissionService.getStudents(filter))
      .then(result => this.students = result)
      .catch(errMessage => alert(errMessage));
  }

}
