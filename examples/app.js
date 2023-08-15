const App = require("../lib");
const app = new App();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

app.get("/foo", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("bar!\n");
});

app.post("/code", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("this was a post request.");
});

app.listen(3000);
