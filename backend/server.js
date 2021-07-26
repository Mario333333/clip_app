const express = require("express");
var path = require("path");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.set("port", process.env.port || 8000);

app.options("*", cors());
app.use(express.json()); // para entender lo que viene en request en posts
app.use(cors());
app.use(express.static(path.join(__dirname, "build"))); // esto esencial
///To create a new directory in your index.js file, insert __dirname as the first argument to path.join() and the name of the new directory Here, you’re telling Node.js to use __dirname to point to the public directory that contains static files.
app.use("/api", routes);
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname));
  console.log("Runnig on port ", app.get("port"));
});
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
