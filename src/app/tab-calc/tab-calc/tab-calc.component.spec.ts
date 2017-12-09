import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TabCalcComponent } from './tab-calc.component';
import { CalcModeEnum } from '../calc-mode.enum';

describe('TabCalcComponent', () => {
  let component: TabCalcComponent;
  let fixture: ComponentFixture<TabCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, // Needed by MaterialModule
        MatCardModule, 
        MatInputModule,
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

  it('should be initialized with correct values', () => {
    expect(component.mode).toBe(CalcModeEnum.POSTTAX);
    expect(component.tabCalcForm.value['price']).toBe(0);
    expect(component.tabCalcForm.value['tipPercent']).toBe(20);
    expect(component.taxAmount).toBe(0);
    expect(component.tipAmount).toBe(0);
    expect(component.totalAmount).toBe(0);
    expect(component.taxRate).toBe(0.07);
  });

  describe('should update the amounts correctly when price is changed', () => {
    const specPrice = 100.00;

    it('in posttax mode', () => {
      component.tabCalcForm.patchValue({price: specPrice});

      expect(component.mode).toBe(CalcModeEnum.POSTTAX);
      expect(component.tipAmount).toBe(specPrice * component.tabCalcForm.value['tipPercent'] / 100);
      expect(component.totalAmount).toBe(specPrice + component.tipAmount);
    });
    
    it('in pretax mode', () => {
      component.toggleMode();
      component.tabCalcForm.patchValue({price: specPrice});

      expect(component.taxAmount).toBe(specPrice * component.taxRate);
      expect(component.tipAmount).toBe(specPrice * component.tabCalcForm.value['tipPercent'] / 100);
      expect(component.totalAmount).toBe(specPrice + component.taxAmount + component.tipAmount);
    });
  });

  describe('should update the amounts correctly when tip percent is changed', () => {
    const specPrice = 100.00;
    const specTipPercent = 10;

    it('in posttax mode', () => {
      component.tabCalcForm.patchValue({price: specPrice, tipPercent: specTipPercent});
  
      expect(component.mode).toBe(CalcModeEnum.POSTTAX);
      expect(component.tipAmount).toBe(specPrice * specTipPercent / 100);
      expect(component.totalAmount).toBe(specPrice + component.tipAmount);
    });
    
    it('in pretax mode', () => {
      component.toggleMode();
      component.tabCalcForm.patchValue({price: specPrice, tipPercent: specTipPercent});
  
      expect(component.taxAmount).toBe(specPrice * component.taxRate);
      expect(component.tipAmount).toBe(specPrice * specTipPercent / 100);
      expect(component.totalAmount).toBe(specPrice + component.taxAmount + component.tipAmount);
    });
  });

  it('should reset the form values when resetForm is called', () => {
    component.tabCalcForm.patchValue({price: 123, tipPercent: 23});
    component.resetForm();

    expect(component.tabCalcForm.value['price']).toBe(0);
    expect(component.tabCalcForm.value['tipPercent']).toBe(20);
    expect(component.taxAmount).toBe(0);
    expect(component.tipAmount).toBe(0);
    expect(component.totalAmount).toBe(0);
    expect(component.taxRate).toBe(0.07);
  });
});
