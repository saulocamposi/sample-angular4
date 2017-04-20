import { SampleAngular4Page } from './app.po';

describe('sample-angular4 App', () => {
  let page: SampleAngular4Page;

  beforeEach(() => {
    page = new SampleAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
