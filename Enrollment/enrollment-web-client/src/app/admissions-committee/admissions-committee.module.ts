import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdmissionsCommitteeRoutingModule } from './admissions-committee-routing.module';

import { AdmissionsCommitteeService } from './services/admissions-committee.service';

import { AdmissionsCommitteeComponent } from './admissions-committee.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdmissionsCommitteeRoutingModule,
  ],
  declarations: [AdmissionsCommitteeComponent, StudentRowComponent, StudentsTableComponent],
  providers: [AdmissionsCommitteeService]
})
export class AdmissionsCommitteeModule { }
