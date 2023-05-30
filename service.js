const { createServer } = require("http");
const { parse } = require("url");
const { default: next } = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const { host, protocol } = req.headers;
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Check if the host is missing 'www' or not using HTTPS
    if (host.startsWith("www") === false || protocol !== "https:") {
      const redirectUrl = `https://www.${host}${pathname}`;
      res.writeHead(301, { Location: redirectUrl });
      res.end();
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(() => {
    console.log("> Ready on http://localhost");
  });
});
