import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set definitive desktop viewport
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    // Wait a moment for animations
    await new Promise(r => setTimeout(r, 1000));

    await page.screenshot({ path: '/Users/carlosfranciscodiazhuerta/.gemini/antigravity/brain/7f724e7d-e6d4-4443-97d5-240cd6d66e17/desktop_hero_verify.png', fullPage: false });

    await browser.close();
    console.log('Screenshot saved.');
})();
