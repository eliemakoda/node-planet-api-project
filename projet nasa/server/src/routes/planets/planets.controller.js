const {planets}= require("../../models/planets.model")


function getAllPlanets(req,res){
    //we return to avoid the header already send error 
   return res.status(200).json(planets);
}

module.exports={getAllPlanets}