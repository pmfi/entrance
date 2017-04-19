import {Injectable} from '@angular/core';

import {Speciality} from '../data/Speciality';
import {Student} from '../data/Student';

import * as testData from './testData';

@Injectable()
export class AdmissionsCommitteeService {

  constructor() {}

  getStudents() : Student[] {
    return testData.testStudents;
  }

  getSpecialities() : Speciality[] {
    return testData.testSpecialities;
  }

}
