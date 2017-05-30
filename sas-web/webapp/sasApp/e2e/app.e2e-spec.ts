import { SasAppPage } from './app.po';

describe('sas-app App', () => {
  let page: SasAppPage;

  beforeEach(() => {
    page = new SasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
