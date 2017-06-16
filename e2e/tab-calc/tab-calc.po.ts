import { browser, by, element } from 'protractor';

export class TabCalcPage {
  navigateTo() {
    return browser.get('/tab-calc');
  }
}
