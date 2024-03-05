const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const launchesRouter= require("./routes/launches/launches.router");

app = express();
app.use(
  cors({
    origin: "http://localhost:3000",//allow acces to the API
  })
);
app.use(morgan("combined"));//keep track of request in our server
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","public")));

app.use(planetsRouter);
app.use(launchesRouter);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"));
})
module.exports = app;
