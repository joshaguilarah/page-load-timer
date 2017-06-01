import selenium from 'selenium-webdriver';

const getPageLoadTimeAverage = (options) => {
  let requestNum = 0;
  let totalTime = 0;
  const { url, numRequests } = options;

  const driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build();

  const makeRequest = () => {
    const startTime = Date.now();
    driver.get(`${url}?${startTime}`);
    return driver.wait(() => (
      driver.executeScript('return document.readyState').then(readyState => (readyState === 'complete'))
    )).then(() => {
      requestNum++;
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      console.log(`Request #${requestNum}: ${loadTime}ms`);
      totalTime += loadTime;
      if (requestNum < numRequests) {
        return makeRequest();
      }
      return totalTime;
    }).catch(() => 0);
  };

  console.log('Starting page load timer...');

  makeRequest().then(() => {
    console.log('Page load timer complete');
    console.log(`URL: ${url}`);
    console.log(`Number of requests: ${numRequests}`);
    console.log(`Average page load time: ${(totalTime / numRequests)}ms`);
    driver.quit();
  });
};

export default getPageLoadTimeAverage;
