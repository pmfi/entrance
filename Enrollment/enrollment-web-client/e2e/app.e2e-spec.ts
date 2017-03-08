import { EnrollmentWebClientPage } from './app.po';

describe('enrollment-web-client App', () => {
  let page: EnrollmentWebClientPage;

  beforeEach(() => {
    page = new EnrollmentWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
