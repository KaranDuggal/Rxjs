import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffBetweenObservableAndSubjectComponent } from './diff-between-observable-and-subject.component';

describe('DiffBetweenObservableAndSubjectComponent', () => {
  let component: DiffBetweenObservableAndSubjectComponent;
  let fixture: ComponentFixture<DiffBetweenObservableAndSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffBetweenObservableAndSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffBetweenObservableAndSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
