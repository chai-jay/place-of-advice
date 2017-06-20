import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pla-tab-calc',
  templateUrl: './tab-calc.component.html',
  styleUrls: ['./tab-calc.component.css']
})
export class TabCalcComponent implements OnInit {
  public tabCalcForm: FormGroup;
  public taxAmount: number;
  public tipAmount: number;
  public totalAmount: number;
  public readonly taxPercent: number = 0.07;

  constructor() { }

  ngOnInit() {
    this.tabCalcForm = new FormGroup({
      'tipPercent': new FormControl(20, [
        Validators.required,
        Validators.pattern(/\d+/),
        Validators.min(0)
      ]),
      'price': new FormControl(0.00, [
        Validators.required,
        Validators.pattern(/^\d+\.\d{2}$/),
        Validators.min(0.00)
      ])
    });

    this.taxAmount = 0.00;
    this.tipAmount = 0.00;
    this.totalAmount = 0.00;
  }

  public updateForm(): void {
    const price: number = this.tabCalcForm.get('price').value;

    this.taxAmount = this.taxPercent * price;
    this.tipAmount = this.tabCalcForm.get('tipPercent').value * price;
    this.totalAmount = price + this.taxAmount + this.tipAmount;
  }

  public clearForm(): void {
    this.tabCalcForm.reset({
      'tipPercent': 20,
      'price': 0.00
    });
    this.updateForm();
    return;
  }

}
