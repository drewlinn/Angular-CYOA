import { CYOAPage } from './app.po';

describe('cyoa App', () => {
  let page: CYOAPage;

  beforeEach(() => {
    page = new CYOAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
