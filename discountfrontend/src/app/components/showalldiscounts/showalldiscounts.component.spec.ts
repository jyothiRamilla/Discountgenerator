import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalldiscountsComponent } from './showalldiscounts.component';

describe('ShowalldiscountsComponent', () => {
  let component: ShowalldiscountsComponent;
  let fixture: ComponentFixture<ShowalldiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowalldiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalldiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
