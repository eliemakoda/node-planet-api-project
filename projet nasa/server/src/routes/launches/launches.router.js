const express = require("express");
const launchesRouter = express.Router();

const { getAllLaunches, HttpAddNewLaunch ,httpAbordLanuch} = require("./launches.controller");


launchesRouter.get("/launches", getAllLaunches);
launchesRouter.post("/launches", HttpAddNewLaunch);

launchesRouter.delete('/launches/:id', httpAbordLanuch);

module.exports = launchesRouter;
