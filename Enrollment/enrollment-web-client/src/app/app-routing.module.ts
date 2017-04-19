import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';
import { SomeTestComponent } from './common/some-test/some-test.component';
import { SomeAnotherComponent } from './common/some-another/some-another.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'admissions-committee', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }