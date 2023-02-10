import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBtnComponent } from './generic-btn.component';

describe('GenericBtnComponent', () => {
  let component: GenericBtnComponent;
  let fixture: ComponentFixture<GenericBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
