import { AppForPMFIPage } from './app.po';

describe('app-for-pmfi App', () => {
  let page: AppForPMFIPage;

  beforeEach(() => {
    page = new AppForPMFIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
