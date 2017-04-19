import { Component, OnInit } from '@angular/core';

import { Speciality } from './data/Speciality';
import { Student } from './data/Student';

import { AdmissionsCommitteeService } from './services/admissions-committee.service';

@Component({ selector: 'app-admissions-committee', templateUrl: './admissions-committee.component.html' })
export class AdmissionsCommitteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
