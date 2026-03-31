import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Log page errors
  page.on('pageerror', error => {
    console.log(`PAGE ERROR: ${error.message}`);
  });
  
  // Log console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`CONSOLE ERROR: ${msg.text()}`);
    }
  });

  try {
    await page.goto('http://localhost:8080/coach-rental/', { waitUntil: 'networkidle' });
    
    // Check if there is an error boundary details element
    const detailsText = await page.evaluate(() => {
      const details = document.querySelector('details');
      return details ? details.textContent : null;
    });

    if (detailsText) {
      console.log('DETAILS CONTENT:', detailsText);
    } else {
      console.log('No <details> found or empty.');
    }
  } catch (e) {
    console.log('PUPPETEER ERROR:', e.message);
  } finally {
    await browser.close();
  }
})();
