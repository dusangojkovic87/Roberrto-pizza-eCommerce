import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamMemberFormComponent } from './add-team-member-form.component';

describe('AddTeamMemberFormComponent', () => {
  let component: AddTeamMemberFormComponent;
  let fixture: ComponentFixture<AddTeamMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamMemberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
