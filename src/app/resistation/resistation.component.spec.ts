import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistationComponent } from './resistation.component';

describe('ResistationComponent', () => {
  let component: ResistationComponent;
  let fixture: ComponentFixture<ResistationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistationComponent]
    });
    fixture = TestBed.createComponent(ResistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
