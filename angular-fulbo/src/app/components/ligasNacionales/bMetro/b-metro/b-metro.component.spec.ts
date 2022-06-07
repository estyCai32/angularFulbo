import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMetroComponent } from './b-metro.component';

describe('BMetroComponent', () => {
  let component: BMetroComponent;
  let fixture: ComponentFixture<BMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMetroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
