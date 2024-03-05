// const Emitter= require("events");
// const obj= new Emitter();
// obj.on("runserver",(name)=>{
//     console.log(`Hello je suis le gestionnaire d'évènement nommé ${name} et j'ai reçu l'ordre de lancer le serveur `);
// });

// obj.on("runserver",()=>{
//     console.log("le serveur  s'exécute au port 3000");
// });
// obj.on("debug",()=>{
//     console.log("no error found  ");
// });
// obj.on("close",()=>{
//     console.log("closing the server ");
// });
// obj.emit(process.argv[2],process.argv[3])


// const http= require("http");
// const req= http.request("http://www.google.com",(res)=>{
//     res.on("data",(chunk)=>{
//         console.log(`data ${chunk}`);
//     });
//     res.on("end",()=>{
//         console.log("end of the process ");
//     })
// });
// req.end();
// import {Login} from "./login.mjs";
// Login(3000);
// console.log("welcome to nodemon")
// const parse = require("csv-parse") 
// const assert= require("assert")
//  const parser= parse({
//     delimiter:","
//  });
//  const   output=[];
//  parser.on("readable", function(){
//     let field;
//     while(field= parser.read())
//     {
//         output.push(field)
//     }
//  });
//  parser.on("error",(err)=>{console.log(err)});
//  parser.emit("readeable");
//  console.log(output)
const parse= require('csv-parse');
const fs= require("fs");
const file= fs.createReadStream("planet.csv");
const result=[];
file.pipe(parse.parse({
    Comment:"#",
    columns:true    
}))
file.on("data",(ligne)=>{
    result.push(ligne);
})
file.on('end',()=>{
    result.forEach(element => {
        console.log(element );

    });
});
file.on("error",(err)=>{
    console.log(err.message);
})