import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';
import { SomeTestComponent } from './common/some-test/some-test.component';
import { SomeAnotherComponent } from './common/some-another/some-another.component';

import { AppRoutingModule } from './app-routing.module';

import { AdmissionsCommitteeModule } from './admissions-committee/admissions-committee.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    SomeTestComponent,
    SomeAnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdmissionsCommitteeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
