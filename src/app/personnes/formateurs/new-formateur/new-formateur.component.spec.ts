import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormateurComponent } from './new-formateur.component';

describe('NewFormateurComponent', () => {
  let component: NewFormateurComponent;
  let fixture: ComponentFixture<NewFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
