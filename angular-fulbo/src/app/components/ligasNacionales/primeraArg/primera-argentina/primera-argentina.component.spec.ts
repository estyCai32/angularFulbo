import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraArgentinaComponent } from './primera-argentina.component';

describe('PrimeraArgentinaComponent', () => {
  let component: PrimeraArgentinaComponent;
  let fixture: ComponentFixture<PrimeraArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraArgentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
