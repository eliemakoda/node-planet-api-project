const launches = new Map();
let latesFlighNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["NASA", "Emako Tech"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function IsLaunchExist(id){
  return launches.has(id)
}

function AddNewLaunch(newlauch) {
  latesFlighNumber += 1;
  launches.set(
    latesFlighNumber,
    Object.assign(newlauch, {
      flightNumber: latesFlighNumber,
      customers: ["NASA", "Emako Tech"],
      upcoming: true,
      sucess: true,
    })
  );
}

function abortLaunchById(id){
const lg= launches.get(id);
lg.upcoming=false;
lg.success=false;
return lg; 
}

module.exports = {
  launches,
  AddNewLaunch,
  IsLaunchExist,
  abortLaunchById
};
