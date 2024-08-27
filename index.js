// modules
const http = require("http");
const fs = require("fs");

// port
const port = 5500;

// function to remove duplicate codes
function content(res, statusCode, message) {
  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.write(message);
  res.end();
}

// server creation with necessary routes
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    content(res, 200, "This is the Home Page");
  } else if (req.url === "/about") {
    content(res, 200, "This is the About Page");
  } else if (req.url === "/contact") {
    content(res, 200, "This is the Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "Hello World", (error) => {
      if (error) {
        content(res, 400, "file write fail");
      } else {
        content(res, 200, "file write success");
      }
    });
  } else {
    content(res, 400, "page not found");
  }
});

// server running
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
