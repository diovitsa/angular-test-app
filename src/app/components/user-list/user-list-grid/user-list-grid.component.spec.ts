import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListGridComponent } from './user-list-grid.component';
import { MatTableModule } from '@angular/material';

describe('UserListGridComponent', () => {
  let component: UserListGridComponent;
  let fixture: ComponentFixture<UserListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListGridComponent],
      imports: [MatTableModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.displayedColumns).toEqual(['name', 'email', 'password', 'actions']);
  });
});
