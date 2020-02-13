import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDatewiseComponent } from './due-datewise.component';

describe('DueDatewiseComponent', () => {
  let component: DueDatewiseComponent;
  let fixture: ComponentFixture<DueDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
