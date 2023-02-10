import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataFormComponent } from './show-data-form.component';

describe('ShowDataFormComponent', () => {
  let component: ShowDataFormComponent;
  let fixture: ComponentFixture<ShowDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
