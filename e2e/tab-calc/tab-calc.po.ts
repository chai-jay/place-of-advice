import { browser, by, element } from 'protractor';

export class TabCalcPage {
  navigateTo() {
    return browser.get('/tab-calc');
  }

  getCalcElement() {
    return element(by.css('pla-tab-calc'));
  }

  getCalcMatcardElement() {
    return element(by.css('pla-tab-calc mat-card'));
  }

  getCalcHeaderText() {
    return element(by.css('.feature-header')).getText();
  }

  getCalcTipInput() {
    return element(by.css('input#tipPercent'));
  }

  getCalcTipInputType() {
    return this.getCalcTipInput().getAttribute('type');
  }

  getCalcTipInputPlaceholderText() {
    return this.getCalcTipInput().getAttribute('placeholder');
  }

  getCalcTipInputStep() {
    return this.getCalcTipInput().getAttribute('step');
  }

  getCalcTipInputModelBinding() {
    return this.getCalcTipInput().getAttribute('formControlName');
  }

  getCalcTipInputValue() {
    return this.getCalcTipInput().getAttribute('value');
  }

  getCalcPriceInput() {
    return element(by.css('input#price'));
  }

  getCalcPriceInputType() {
    return this.getCalcPriceInput().getAttribute('type');
  }

  getCalcPriceInputPlaceholderText() {
    return this.getCalcPriceInput().getAttribute('placeholder');
  }

  getCalcPriceInputStep() {
    return this.getCalcPriceInput().getAttribute('step');
  }

  getCalcPriceInputModelBinding() {
    return this.getCalcPriceInput().getAttribute('formControlName');
  }

  getCalcPriceInputValue() {
    return this.getCalcPriceInput().getAttribute('value');
  }

  getTaxAmount() {
    return element(by.css('.amount-container.tax .amount-text')).getText();
  }

  getTipAmount() {
    return element(by.css('.amount-container.tip .amount-text')).getText();
  }

  getTotalAmount() {
    return element(by.css('.amount-container.total .amount-text')).getText();
  }

  getResetButton() {
    return element(by.css('.reset-button'));
  }

  getModeButton() {
    return element(by.css('.mode-button'));
  }
}
