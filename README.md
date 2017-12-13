# protractor-async-example

Proving out a use case of async/await in Protractor 5. Requires Node >= 8.

## Setup

```bash
# Install dependencies (in real life don't install these globally)
npm install -g protractor http-server
wedriver-manager update
# In one window, run the Selenium server
webdriver-manager start
# In another window, serve the test site (at http://localhost:8080)
hs .
# In a third window, run the tests
protractor conf.js
```
