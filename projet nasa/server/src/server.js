// port  configuration 
const PORT= process.env.PORT || 8000;

const app = require("./app");

const http= require("http");
const {LoadPlanetsData} = require("./models/planets.model");
const server= http.createServer(app);

async function StartServer(){
    await LoadPlanetsData();
    server.listen(PORT,()=>{
        console.log("server connected on port" , PORT);
        console.log(`see logs at http://localhost:${PORT}`);
    });
}
StartServer();