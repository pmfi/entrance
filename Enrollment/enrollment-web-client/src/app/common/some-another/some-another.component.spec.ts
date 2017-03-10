import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAnotherComponent } from './some-another.component';

describe('SomeAnotherComponent', () => {
  let component: SomeAnotherComponent;
  let fixture: ComponentFixture<SomeAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
