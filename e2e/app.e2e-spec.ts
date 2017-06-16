import { PlaceOfAdvicePage } from './app.po';

describe('place-of-advice App', () => {
  let page: PlaceOfAdvicePage;

  beforeEach(() => {
    page = new PlaceOfAdvicePage();
  });

  it('should have the root element', () => {
    page.navigateTo();
    expect(page.getRootElement().isPresent()).toBe(true);
  });

  /**
   * 
   * Global HeaderComponent
   * 
   */

  describe('Header Component', () => {
    it ('should exist', () => {
      page.navigateTo();
      expect(page.getHeaderElement().isPresent()).toBe(true);
    });

    it('should display header text', () => {
      page.navigateTo();
      expect(page.getHeaderText()).toEqual('Place of Advice');
    });

    it('should display a collapsible nav menu and nav links', () => {
      page.navigateTo();
      expect(page.getHeaderNavMenuButton().isPresent()).toBe(true);
      expect(page.getHeaderNavMenu().isPresent()).toBe(true);
      page.getHeaderNavMenuButton().click(); // Click button to show Nav Menu element
      expect(page.getHeaderNavMenuHomeLink().isPresent()).toBe(true);
      expect(page.getHeaderNavMenuTabcalcLink().isPresent()).toBe(true);
    });
  })

  /**
   * 
   * HomeComponent
   * 
   */

  describe('Home Component', () => {
    it('should exist', () => {
      page.navigateTo();
      expect(page.getHeaderElement().isPresent()).toBe(true);
    });
  });
});
