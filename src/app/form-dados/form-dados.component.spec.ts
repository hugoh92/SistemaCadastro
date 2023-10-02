import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosComponent } from './form-dados.component';

describe('FormDadosComponent', () => {
  let component: FormDadosComponent;
  let fixture: ComponentFixture<FormDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
