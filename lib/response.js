exports.send = function (content) {
  this.writeHead(200, { "Content-Type": "text/html" });
  this.end(content);
};
