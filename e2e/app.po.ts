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
    return element(by.css('button[mat-icon-button]'));
  }

  getHeaderNavMenu() {
    return element(by.css('mat-menu'));
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

  getHomeMatcardElement() {
    return element(by.css('pla-home mat-card'));
  }

  getHomeText() {
    return this.getHomeElement().getText();
  }
}
