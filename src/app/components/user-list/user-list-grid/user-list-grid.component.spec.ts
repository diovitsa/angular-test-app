import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListGridComponent } from './user-list-grid.component';

describe('UserListGridComponent', () => {
  let component: UserListGridComponent;
  let fixture: ComponentFixture<UserListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
