import { NgworkshopPage } from './app.po';

describe('ngworkshop App', () => {
  let page: NgworkshopPage;

  beforeEach(() => {
    page = new NgworkshopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
