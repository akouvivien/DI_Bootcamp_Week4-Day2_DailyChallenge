import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpt3Component } from './cpt3.component';

describe('Cpt3Component', () => {
  let component: Cpt3Component;
  let fixture: ComponentFixture<Cpt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cpt3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
