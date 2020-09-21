import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiscountsComponent } from './editdiscounts.component';

describe('EditdiscountsComponent', () => {
  let component: EditdiscountsComponent;
  let fixture: ComponentFixture<EditdiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
