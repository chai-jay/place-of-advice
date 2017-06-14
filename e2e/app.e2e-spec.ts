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

  it('should display header component with header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Place of Advice');
  });

  it('should display header component with nav menu and nav menu button', () => {
    page.navigateTo();
    expect(page.getHeaderNavMenuButton().isPresent()).toBe(true);
    expect(page.getHeaderNavMenu().isPresent()).toBe(true);
  });
});
