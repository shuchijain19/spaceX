import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDataWrapperComponent } from './launch-data-wrapper.component';

describe('LaunchDataWrapperComponent', () => {
  let component: LaunchDataWrapperComponent;
  let fixture: ComponentFixture<LaunchDataWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDataWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDataWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
