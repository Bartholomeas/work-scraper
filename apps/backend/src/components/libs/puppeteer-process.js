import { default as puppeteer } from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath(),
    args: ["--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox"],
  });
})();
