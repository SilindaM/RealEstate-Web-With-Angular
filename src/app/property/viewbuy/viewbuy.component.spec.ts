import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuyComponent } from './viewbuy.component';

describe('ViewbuyComponent', () => {
  let component: ViewbuyComponent;
  let fixture: ComponentFixture<ViewbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
