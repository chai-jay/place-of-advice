import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TabCalcComponent } from './tab-calc.component';

describe('TabCalcComponent', () => {
  let component: TabCalcComponent;
  let fixture: ComponentFixture<TabCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, // Needed by MaterialModule
        MaterialModule,
        ReactiveFormsModule
      ],
      declarations: [TabCalcComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
