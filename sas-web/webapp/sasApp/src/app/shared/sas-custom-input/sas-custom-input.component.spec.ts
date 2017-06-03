import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasCustomInputComponent } from './sas-custom-input.component';

describe('SasCustomInputComponent', () => {
  let component: SasCustomInputComponent;
  let fixture: ComponentFixture<SasCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
