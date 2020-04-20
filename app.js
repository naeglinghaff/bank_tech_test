const httpServer = require("http-server");
const path = require("path");

const pathToHtmlAndJsFiles = path.join(__dirname, "./index.html");
const server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(8080);
