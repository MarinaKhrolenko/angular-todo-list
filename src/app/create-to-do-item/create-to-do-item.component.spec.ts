import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToDoItemComponent } from './create-to-do-item.component';

describe('CreateToDoItemComponent', () => {
  let component: CreateToDoItemComponent;
  let fixture: ComponentFixture<CreateToDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateToDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
