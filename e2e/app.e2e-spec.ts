import { AngularGhpagesTestPage } from './app.po';

describe('angular-ghpages-test App', function() {
  let page: AngularGhpagesTestPage;

  beforeEach(() => {
    page = new AngularGhpagesTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
