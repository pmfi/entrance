import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTestComponent } from './some-test-component.component';

describe('SomeTestComponentComponent', () => {
  let component: SomeTestComponent;
  let fixture: ComponentFixture<SomeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
