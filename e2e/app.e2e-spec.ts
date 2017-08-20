import { OditechsolutionPage } from './app.po';

describe('oditechsolution App', function() {
  let page: OditechsolutionPage;

  beforeEach(() => {
    page = new OditechsolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
