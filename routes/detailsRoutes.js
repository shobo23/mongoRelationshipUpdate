const { Router } = require("express");
const { createUserDetails } = require("../controller/detailsController");

const detailsRoute = Router();

detailsRoute.post("/", createUserDetails);

module.exports = detailsRoute;
