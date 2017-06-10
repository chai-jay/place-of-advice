import { PlaceOfAdvicePage } from './app.po';

describe('place-of-advice App', () => {
  let page: PlaceOfAdvicePage;

  beforeEach(() => {
    page = new PlaceOfAdvicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pla!!');
  });
});
