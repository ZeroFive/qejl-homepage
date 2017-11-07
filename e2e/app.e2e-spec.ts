import { QejlHomepagePage } from './app.po';

describe('qejl-homepage App', () => {
  let page: QejlHomepagePage;

  beforeEach(() => {
    page = new QejlHomepagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
