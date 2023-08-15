const http = require("node:http");

class App {
  constructor() {
    this.server = http.createServer(this.handleRequest.bind(this));
    this.routes = [];
  }

  handleRequest(req, res) {
    const route = this.routes.find(
      (r) => r.method === req.method && r.path === req.url
    );
    if (route) {
      route.handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Cannot " + req.method + "\n");
    }
  }

  get(path, handler) {
    this.routes.push({ method: "GET", path, handler });
  }

  listen(
    port,
    cb = () => {
      console.log(`listening to http://localhost:${port}`);
    }
  ) {
    this.server.listen(port, cb);
  }
}

module.exports = App;
