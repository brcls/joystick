"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/user-controller");
const authService = require("../services/auth-service");

router.post("/", controller.post);
router.get("/", controller.get);
router.get("/:cart", controller.getCart);
router.post("/authenticate", controller.authenticate);
router.post("/refresh-token", authService.authorize, controller.refreshToken);
router.put("/:game", authService.authorize, controller.putGame);
router.put("/", authService.authorize, controller.update);

module.exports = router;
