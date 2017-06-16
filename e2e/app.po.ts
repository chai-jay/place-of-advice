import { browser, by, element } from 'protractor';

export class PlaceOfAdvicePage {
  navigateTo() {
    return browser.get('/');
  }

  getRootElement() {
    return element(by.css('pla-root'));
  }

  /**
   * 
   * Global HeaderComponent
   * 
   */

  getHeaderElement() {
    return element(by.css('pla-header'));
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

  getHeaderNavMenuHomeLink() {
    return element(by.css('a[routerlink="/"]'));
  }

  getHeaderNavMenuTabcalcLink() {
    return element(by.css('a[routerlink="/tab-calc"]'));
  }

  /**
   * 
   * HomeComponent
   * 
   */

  getHomeElement() {
    return element(by.css('pla-home'));
  }
}
