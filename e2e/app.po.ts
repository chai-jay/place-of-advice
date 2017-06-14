import { browser, by, element } from 'protractor';

export class PlaceOfAdvicePage {
  navigateTo() {
    return browser.get('/');
  }

  getRootElement() {
    return element(by.css('pla-root'));
  }

  getHeaderText() {
    return element(by.css('pla-header .main-title')).getText();
  }

  getHeaderNavMenuButton() {
    return element(by.css('button[md-icon-button]'));
  }

  getHeaderNavMenu() {
    return element(by.css('md-menu'));
  }
}
