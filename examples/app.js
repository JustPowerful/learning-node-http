const App = require("../lib");
const app = new App();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/foo", (req, res) => {
  res.send("<h2>Bar!</h2>");
});

app.post("/secret", (req, res) => {
  res.send("here's a secret.");
});

app.listen(3000);
