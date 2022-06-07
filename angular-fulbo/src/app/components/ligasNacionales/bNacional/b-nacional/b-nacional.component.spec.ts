import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNacionalComponent } from './b-nacional.component';

describe('BNacionalComponent', () => {
  let component: BNacionalComponent;
  let fixture: ComponentFixture<BNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
