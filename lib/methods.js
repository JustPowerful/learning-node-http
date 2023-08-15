exports.get = function get(path, handler) {
  this.routes.push({ method: "GET", path, handler });
};

exports.post = function post(path, handler) {
  this.routes.push({ method: "POST", path, handler });
};
