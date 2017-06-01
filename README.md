# page-load-timer

This package uses [selenium-webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver) with [chromedriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver) to determine the average page load time for a given webpage.

## Prerequisites

* [Node.js 6.10.x](https://nodejs.org/en/download/)
* [yarn](https://yarnpkg.com/en/)
* [chromedriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)

## Installation

```bash
yarn global add page-load-timer@latest
```

## Usage

The `page-load-timer` cli accepts two arguments.
* `url` - The URL of the webpage to test
* `numRequests` -  The number of requests to send to the URL

```bash
page-load-timer --url=http://www.google.com --numRequests=10
```

Here's what an example output would look like.

```bash
page-load-timer --url=http://www.google.com --numRequests=10
Starting page load timer...
Request #1: 7104ms
Request #2: 2088ms
Request #3: 1301ms
Request #4: 1365ms
Request #5: 1354ms
Request #6: 1330ms
Request #7: 1399ms
Request #8: 1512ms
Request #9: 1386ms
Request #10: 1306ms
Page load timer complete
URL: http://www.allhomes.com.au
Number of requests: 10
Average page load time: 2014.5ms
```
