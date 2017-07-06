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
}
