import { DessertsMVCAngularPage } from './app.po';

describe('desserts-mvc-angular App', () => {
  let page: DessertsMVCAngularPage;

  beforeEach(() => {
    page = new DessertsMVCAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
