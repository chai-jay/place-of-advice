import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

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

  constructor() { }

  ngOnInit(): void {
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

  public updateForm(): void {
    const price: number = this.tabCalcForm.get('price').value;

    this.taxAmount = this.taxRate * price;
    this.tipAmount = this.tabCalcForm.get('tipPercent').value  * price / 100;
    this.totalAmount = price + this.taxAmount + this.tipAmount;
  }

  public resetForm(): void {
    this.tabCalcForm.reset({
      'tipPercent': 20,
      'price': 0.00
    });
    this.updateForm();
    this.priceInput.nativeElement.focus();
    return;
  }

}
