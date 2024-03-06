// port  configuration
const PORT = process.env.PORT || 8000;

const app = require("./app");
const mongo = require("mongoose");
const http = require("http");
const MONGO_URL = ""; //retrieve from mongo db atlass online with credential

const { LoadPlanetsData } = require("./models/planets.model");
const server = http.createServer(app);

async function StartServer() {
  await mongo.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false,
    });

  await LoadPlanetsData();
  server.listen(PORT, () => {
    console.log("server connected on port", PORT);
    console.log(`see logs at http://localhost:${PORT}`);
  });
}
StartServer();
