import { TabCalcPage } from './tab-calc.po';

describe('place-of-advice App', () => {
  let page: TabCalcPage;

  beforeEach(() => {
    page = new TabCalcPage();
  });

  describe('Tab-Calc Component', () => {
    it('should exist', () => {
      page.navigateTo()
      expect(page.getCalcElement().isPresent()).toBe(true);
    });

    it('should use an md-card element', () => {
      page.navigateTo()
      expect(page.getCalcMdcardElement().isPresent()).toBe(true);
    });

    it('should have title text', () => {
      page.navigateTo();
      expect(page.getCalcHeaderText()).toBe('NJ Tab Calculator');
    })

    it('should have tip percent input label with correct text', () => {
      page.navigateTo();
      expect(page.getCalcTipInputLabel().isPresent()).toBe(true);
      expect(page.getCalcTipInputLabelText()).toBe('Tip Percent');
    });

    it('should have a tip percent input with correct attributes', () => {
      page.navigateTo();
      expect(page.getCalcTipInput().isPresent());
      expect(page.getCalcTipInputType()).toBe('number');
      expect(page.getCalcTipInputStep()).toBe('1');
      expect(page.getCalcTipInputModelBinding()).toBe('tipPercent');
    });

    it('should have price input label with correct text', () => {
      page.navigateTo();
      expect(page.getCalcPriceInputLabel().isPresent()).toBe(true);
      expect(page.getCalcPriceInputLabelText()).toBe('Price (pretax)');
    });

    it('should have a tip percent input with correct attributes', () => {
      page.navigateTo();
      expect(page.getCalcPriceInput().isPresent());
      expect(page.getCalcPriceInputType()).toBe('number');
      expect(page.getCalcPriceInputStep()).toBe('0.01');
      expect(page.getCalcPriceInputModelBinding()).toBe('price');
    });
  });

});
