const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("api");
});
routes.post("/addCreditCard", (req, res) => {
  res.json({
    statusCode: 200,
    message: "success",
  });
});

module.exports = routes;
