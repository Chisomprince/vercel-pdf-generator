const chrome = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

export default async (req: any, res: any) => {
  let { body, method } = req;

  if (method !== "POST") {
    // CORS https://vercel.com/guides/how-to-enable-cors
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return res.status(200).end();
  }

  if (!body) return res.status(400).end(`No body provided`);

  if (typeof body === "object" && !body.url)
    return res.status(400).end(`No url provided`);

  const isProd = process.env.NODE_ENV === "production";

  let browser;

  if (isProd) {
    browser = await puppeteer.launch({
      args: chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath(),
      headless: "new",
      ignoreHTTPSErrors: true,
    });
  } else {
    browser = await puppeteer.launch({
      headless: "new",
      executablePath:
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });
  }

  const page = await browser.newPage();

  await page.setViewport({ width: 600, height: 600 });

  // const url = getAbsoluteURL(`?hash=${hash}`, path)
  const url = body.url;

  await page.goto(url, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,

  });

  await browser.close();
  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=output.pdf");

  // CORS
  // res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  res.end(pdfBuffer);
};
