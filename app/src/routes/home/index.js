"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);
router.get("/todo", ctrl.output.spit);

router.post("/todo", ctrl.process.add);
router.patch("/todo/:id",ctrl.process.change);
router.patch("/checkbox",ctrl.process.check);
router.delete("/todo/:id",ctrl.process.kill);

module.exports = router;
