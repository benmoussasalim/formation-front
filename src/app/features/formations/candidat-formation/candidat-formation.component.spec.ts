import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatFormationComponent } from './candidat-formation.component';

describe('CandidatFormationComponent', () => {
  let component: CandidatFormationComponent;
  let fixture: ComponentFixture<CandidatFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
