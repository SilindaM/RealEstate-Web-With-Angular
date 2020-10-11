import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrentComponent } from './viewrent.component';

describe('ViewrentComponent', () => {
  let component: ViewrentComponent;
  let fixture: ComponentFixture<ViewrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
