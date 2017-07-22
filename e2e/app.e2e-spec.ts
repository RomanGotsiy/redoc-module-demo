import { RedocTestPage } from './app.po';

describe('redoc-test App', () => {
  let page: RedocTestPage;

  beforeEach(() => {
    page = new RedocTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
