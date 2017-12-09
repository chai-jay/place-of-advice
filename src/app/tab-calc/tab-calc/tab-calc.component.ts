import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CalcModeEnum } from './../calc-mode.enum';

@Component({
  selector: 'pla-tab-calc',
  templateUrl: './tab-calc.component.html',
  styleUrls: ['./tab-calc.component.css']
})
export class TabCalcComponent implements OnInit, OnDestroy {
  private formChangeSubscription: Subscription;
  @ViewChild('priceInput') private priceInput: ElementRef;

  public tabCalcForm: FormGroup;
  public taxAmount: number;
  public tipAmount: number;
  public totalAmount: number;
  public readonly taxRate: number = 0.07;
  public mode: CalcModeEnum;

  constructor() { }

  ngOnInit(): void {
    // Start with more commonly used post-tax/1-bill mode
    this.mode = CalcModeEnum.POSTTAX;

    this.tabCalcForm = new FormGroup({
      'tipPercent': new FormControl(20, [
        Validators.required,
        Validators.pattern(/\d+/),
        Validators.min(0)
      ]),
      'price': new FormControl(0.00, [
        Validators.required,
        Validators.pattern(/\d{0,2}(\.\d{1,2})?/),
        Validators.min(0.00)
      ])
    });

    this.formChangeSubscription = this.tabCalcForm.valueChanges.subscribe(() => this.updateForm());

    this.taxAmount = 0.00;
    this.tipAmount = 0.00;
    this.totalAmount = 0.00;
  }

  ngOnDestroy(): void {
    this.formChangeSubscription.unsubscribe();
  }

  /**
   * Returns boolean indicating if it's `POSTTAX` (ie normal) mode.
   */
  public isPosttaxMode(): boolean {
    return this.mode === CalcModeEnum.POSTTAX;
  }

  /**
   * Resets the form.
   */
  public resetForm(): void {
    this.tabCalcForm.reset({
      'tipPercent': 20,
      'price': 0.00
    });
    this.updateForm();
    this.priceInput.nativeElement.focus();
    return;
  }

  /**
   * Update values from form changes. 
   */
  private updateForm(): void {
    const price: number = this.tabCalcForm.get('price').value;
    this.tipAmount = this.tabCalcForm.get('tipPercent').value  * price / 100;

    // Calculate total
    this.totalAmount = price + this.tipAmount;
    // Only add on the tax amount if the price is pretax
    if (this.mode === CalcModeEnum.PRETAX) {
      this.taxAmount = this.taxRate * price;
      this.totalAmount += this.taxAmount;
    }
  }

  /**
   * Changes calculator mode.
   */
  public toggleMode(): void {
    this.mode = this.isPosttaxMode() ? CalcModeEnum.PRETAX : CalcModeEnum.POSTTAX;
    this.updateForm();
  }

}
