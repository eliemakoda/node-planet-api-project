const { launches } = require("../../models/launches.model");
const { AddNewLaunch, IsLaunchExist ,abortLaunchById} = require("../../models/launches.model");
function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}
function HttpAddNewLaunch(req, res) {
  const launchs = req.body;
  launchs.launchDate = new Date(launchs.launchDate);
  if (isNaN(launchs.launchDate)) {
    return res.status(400).json({
      error: "invalid launch date format ",
    });
  }

  if (
    !launchs.mission ||
    !launchs.rocket ||
    !launchs.launchDate ||
    !launchs.target
  ) {
    return res.status(400).json({
      error: "missing some properties",
    });
  }
  AddNewLaunch(launchs);
  return res.status(201).json(launchs);
}
function httpAbordLanuch(req, res) {
  const launchId =Number( req.params.id);
  if (!IsLaunchExist(launchId)) {
    return res.status(404).json({
        error:"no Launch found with that id"
    })
  } 
  const aborted= abortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = { getAllLaunches, HttpAddNewLaunch, httpAbordLanuch };
