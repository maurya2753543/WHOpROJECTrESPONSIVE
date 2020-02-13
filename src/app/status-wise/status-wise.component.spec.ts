import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWiseComponent } from './status-wise.component';

describe('StatusWiseComponent', () => {
  let component: StatusWiseComponent;
  let fixture: ComponentFixture<StatusWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
