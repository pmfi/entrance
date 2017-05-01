import {Component, OnInit} from '@angular/core';

import {Student} from '../../data/Student';
import {Speciality} from '../../data/Speciality';
import {StudentFilter} from '../../data/StudentFilter';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {AdmissionsCommitteeService} from '../../services/admissions-committee.service';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  constructor(private admissionService: AdmissionsCommitteeService) {
    this.filter = new StudentFilter();
    this.filterStudentsStream = new Subject<StudentFilter>()
  }

  specialities: Speciality[];
  filter: StudentFilter;

  students: Observable<Student[]>;

  private filterStudentsStream: Subject<StudentFilter>;

  setSurnameFilter(value: string) {
    this.filter = {...this.filter, surname:value};
    this.filterStudentsStream.next(this.filter);
  }

  setSpecialityFilter(value: number) {
    this.filter = {...this.filter, specialityId:value};
    this.filterStudentsStream.next(this.filter);
  }

  ngOnInit() {
    this.admissionService.getSpecialities()
      .then(result => this.specialities = result)
      .then(() => this.filter.specialityId = this.specialities[0].id)
      .then(() => this.subscribeFilterStudents())
      .then(() => this.filterStudentsStream.next(this.filter))
      .catch(errMessage => alert(errMessage));
  }

  private subscribeFilterStudents() {
    this.students = this.filterStudentsStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(filter => this.admissionService.getStudents(filter));
  }

}
