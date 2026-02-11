const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.resolve(__dirname, 'seo-kings-seo-blueprint.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '18mm',
      right: '18mm',
    },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  console.log('PDF generated: seo-kings-seo-blueprint.pdf');
  await browser.close();
})();
