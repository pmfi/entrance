import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Speciality} from '../data/Speciality';
import {Student} from '../data/Student';
import {StudentFilter} from '../data/StudentFilter'

@Injectable()
export class AdmissionsCommitteeService {

  private admissionsCommitteeUrl = '/api/AdmissionsCommittee';

  constructor(private http: Http) {
  }

  getStudents(filter: StudentFilter): Promise<Student[]> {
    const url = `${this.admissionsCommitteeUrl}/getFilteredStudents?surname=${filter.surname}&specialityId=${filter.specialityId}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }

  getSpecialities(): Promise<Speciality[]> {
    const url = `${this.admissionsCommitteeUrl}/getAllSpecialities`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Speciality[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
