import { Component, OnInit } from '@angular/core';

import { Student } from '../../data/Student';
import { Speciality } from '../../data/Speciality';

import { AdmissionsCommitteeService } from '../../services/admissions-committee.service';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  constructor(private admissionService: AdmissionsCommitteeService) { }

  private _allStudents: Student[];

  specialities: Speciality[];
  students: Student[];

  onFilterStudents(surnameFilter: string) {
    if (surnameFilter) {
      this.students = this._allStudents.filter(s =>
        s.surname.toLowerCase().includes(surnameFilter.toLowerCase()));
    } else {
      this.students = this._allStudents;
    }
  }

  ngOnInit() {
    this.specialities = this.admissionService.getSpecialities();
    this._allStudents = this.admissionService.getStudents();

    this.students = this._allStudents;
  }

}
