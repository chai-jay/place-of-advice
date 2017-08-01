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

    it('should have a tip percent input with correct attributes', () => {
      page.navigateTo();
      expect(page.getCalcTipInput().isPresent());
      expect(page.getCalcTipInputType()).toBe('number');
      expect(page.getCalcTipInputPlaceholderText()).toBe('Tip Percent');
      expect(page.getCalcTipInputStep()).toBe('1');
      expect(page.getCalcTipInputModelBinding()).toBe('tipPercent');
    });

    it('should have a tip percent input with correct attributes', () => {
      page.navigateTo();
      expect(page.getCalcPriceInput().isPresent());
      expect(page.getCalcPriceInputType()).toBe('number');
      expect(page.getCalcPriceInputPlaceholderText()).toBe('Price (Pretax)');
      expect(page.getCalcPriceInputStep()).toBe('0.01');
      expect(page.getCalcPriceInputModelBinding()).toBe('price');
    });

    it('should have the correct initial values', () => {
      page.navigateTo();
      expect(page.getCalcTipInputValue()).toBe('20');
      expect(page.getCalcPriceInputValue()).toBe('0');
      expect(page.getTaxAmount()).toBe('$0.00');
      expect(page.getTipAmount()).toBe('$0.00');
      expect(page.getTotalAmount()).toBe('$0.00');
    });
  });

});
