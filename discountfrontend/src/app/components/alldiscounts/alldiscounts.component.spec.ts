import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldiscountsComponent } from './alldiscounts.component';

describe('AlldiscountsComponent', () => {
  let component: AlldiscountsComponent;
  let fixture: ComponentFixture<AlldiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
