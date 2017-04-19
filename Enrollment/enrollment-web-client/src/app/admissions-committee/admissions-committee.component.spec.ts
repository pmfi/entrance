import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsCommitteeComponent } from './admissions-committee.component';

describe('AdmissionsCommitteeComponent', () => {
  let component: AdmissionsCommitteeComponent;
  let fixture: ComponentFixture<AdmissionsCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionsCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
