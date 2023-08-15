"use strict";

const http = require("node:http");

const server_response = require("./response");
http.ServerResponse.prototype.send = server_response.send;

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

  listen(
    port,
    cb = () => {
      console.log(`listening to http://localhost:${port}`);
    }
  ) {
    this.server.listen(port, cb);
  }
}

const http_methods = require("./methods");
App.prototype.get = http_methods.get;
App.prototype.post = http_methods.post;

module.exports = App;
