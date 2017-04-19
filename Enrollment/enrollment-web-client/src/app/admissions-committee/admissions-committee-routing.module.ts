import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmissionsCommitteeComponent } from './admissions-committee.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

const appRoutes: Routes = [
  {
    path: 'admissions-committee', 
    component: AdmissionsCommitteeComponent,
    children: [
      { path: '', component: StudentsTableComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdmissionsCommitteeRoutingModule { }