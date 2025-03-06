const { Router } = require("express");
const { createUserDetails, updateUserDetails } = require("../controller/detailsController");

const detailsRoute = Router();

// create detail
detailsRoute.post("/", createUserDetails);

// update detail
detailsRoute.patch("/:userId/updateDetail/:id", updateUserDetails)

module.exports = detailsRoute;
