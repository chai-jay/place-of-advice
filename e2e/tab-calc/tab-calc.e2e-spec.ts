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

    it('should use an mat-card element', () => {
      page.navigateTo()
      expect(page.getCalcMatcardElement().isPresent()).toBe(true);
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

    it('should have the correct initial values for amounts', () => {
      page.navigateTo();
      expect(page.getCalcTipInputValue()).toBe('20');
      expect(page.getCalcPriceInputValue()).toBe('0');
      expect(page.getTaxAmount()).toBe('$0.00');
      expect(page.getTipAmount()).toBe('$0.00');
      expect(page.getTotalAmount()).toBe('$0.00');
    });

    it('should calculate the appropriate amounts after changing the price and tip inputs', () => {
      const specTip = '10';
      const specPrice = '100.00';

      page.navigateTo();
      page.getCalcTipInput().clear();
      page.getCalcTipInput().sendKeys(specTip);
      page.getCalcPriceInput().clear();
      page.getCalcPriceInput().sendKeys(specPrice);

      expect(page.getCalcTipInputValue()).toBe(specTip);
      expect(page.getCalcPriceInputValue()).toBe(specPrice);
      expect(page.getTaxAmount()).toBe('$' + (+specPrice * 0.07).toFixed(2));
      expect(page.getTipAmount()).toBe('$' + (+specPrice * +specTip / 100).toFixed(2));
      expect(page.getTotalAmount()).toBe('$' + (+specPrice * (1 + 0.07 + (+specTip / 100))).toFixed(2));
    });

    it('should reset values after pressing the reset button', () => {
      const specTip = '10';
      const specPrice = '100.00';

      page.navigateTo();
      page.getCalcTipInput().clear();
      page.getCalcTipInput().sendKeys(specTip);
      page.getCalcPriceInput().clear();
      page.getCalcPriceInput().sendKeys(specPrice);
      page.getResetButton().click();

      expect(page.getCalcTipInputValue()).toBe('20');
      expect(page.getCalcPriceInputValue()).toBe('0');
      expect(page.getTaxAmount()).toBe('$0.00');
      expect(page.getTipAmount()).toBe('$0.00');
      expect(page.getTotalAmount()).toBe('$0.00');
    });
  });

});
