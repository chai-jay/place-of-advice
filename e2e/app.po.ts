import { browser, by, element } from 'protractor';

export class PlaceOfAdvicePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pla-root h1')).getText();
  }
}
