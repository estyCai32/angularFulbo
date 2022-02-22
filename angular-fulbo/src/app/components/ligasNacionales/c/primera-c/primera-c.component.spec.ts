import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraCComponent } from './primera-c.component';

describe('PrimeraCComponent', () => {
  let component: PrimeraCComponent;
  let fixture: ComponentFixture<PrimeraCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
