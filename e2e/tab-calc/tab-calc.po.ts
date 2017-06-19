import { browser, by, element } from 'protractor';

export class TabCalcPage {
  navigateTo() {
    return browser.get('/tab-calc');
  }

  getTabCalcElement() {
    return element(by.css('pla-tab-calc'));
  }

  getTabCalcMdcardElement() {
    return element(by.css('pla-tab-calc md-card'));
  }
}
