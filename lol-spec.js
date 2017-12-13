describe('lol', () => {
  const waitForIt = async () => {
    return browser.executeAsyncScript(() => {
      var done = arguments[arguments.length -1];
      window.App.ready.then(function() {
        console.log('hooray!');
        done(true);
      }).fail(function() {
        console.log('wowow');
        done(false);
      });
    });
  };

  beforeEach(() => {
    browser.ignoreSynchronization = true;
  });

  it('works maybe', async () => {
    await browser.get('http://localhost:8080/index.html');
    const value = await waitForIt();
    expect(value).toBe(true);
  });
});
