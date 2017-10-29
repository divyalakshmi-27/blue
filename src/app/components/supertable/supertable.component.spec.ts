import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertableComponent } from './supertable.component';

describe('SupertableComponent', () => {
  let component: SupertableComponent;
  let fixture: ComponentFixture<SupertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
