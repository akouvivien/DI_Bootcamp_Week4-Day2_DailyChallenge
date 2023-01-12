import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpt2Component } from './cpt2.component';

describe('Cpt2Component', () => {
  let component: Cpt2Component;
  let fixture: ComponentFixture<Cpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
