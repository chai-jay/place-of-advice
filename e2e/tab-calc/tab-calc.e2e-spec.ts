import { TabCalcPage } from './tab-calc.po';

describe('place-of-advice App', () => {
  let page: TabCalcPage;

  beforeEach(() => {
    page = new TabCalcPage();
  });

  describe('Tab-Calc Component', () => {
    it ('should exist', () => {
      page.navigateTo()
      expect(page.getTabCalcElement().isPresent()).toBe(true);
    });
  });

});
