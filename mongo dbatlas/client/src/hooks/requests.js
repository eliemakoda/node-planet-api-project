const ApiAddress = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${ApiAddress}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${ApiAddress}/launches`);
  const launchesc = await response.json();
  return launchesc.sort((key, value) => {
    return key.flightNumber - value.flighNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${ApiAddress}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${ApiAddress}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.error(err)
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
