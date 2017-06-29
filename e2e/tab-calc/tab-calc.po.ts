import { browser, by, element } from 'protractor';

export class TabCalcPage {
  navigateTo() {
    return browser.get('/tab-calc');
  }

  getCalcElement() {
    return element(by.css('pla-tab-calc'));
  }

  getCalcMdcardElement() {
    return element(by.css('pla-tab-calc md-card'));
  }

  getCalcHeaderText() {
    return element(by.css('.feature-header')).getText();
  }

  getCalcTipInputLabel() {
    return element(by.css('label[for="tipPercent"]'));
  }

  getCalcTipInputLabelText() {
    return this.getCalcTipInputLabel().getText();
  }

  getCalcTipInput() {
    return element(by.css('input#tipPercent'));
  }

  getCalcTipInputType() {
    return this.getCalcTipInput().getAttribute('type');
  }

  getCalcTipInputStep() {
    return this.getCalcTipInput().getAttribute('step');
  }

  getCalcTipInputModelBinding() {
    return this.getCalcTipInput().getAttribute('formControlName');
  }

  getCalcPriceInputLabel() {
    return element(by.css('label.amount-input-label[for="price"]'));
  }

  getCalcPriceInputLabelText() {
    return this.getCalcPriceInputLabel().getText();
  }

  getCalcPriceInput() {
    return element(by.css('input#price'));
  }

  getCalcPriceInputType() {
    return this.getCalcPriceInput().getAttribute('type');
  }

  getCalcPriceInputStep() {
    return this.getCalcPriceInput().getAttribute('step');
  }

  getCalcPriceInputModelBinding() {
    return this.getCalcPriceInput().getAttribute('formControlName');
  }
}
