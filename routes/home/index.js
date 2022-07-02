"use strict"
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

//외부로 내보내기 명령
module.exports = router;