const express= require("express");
const app = express();
app.get('/',(req,res)=>{
    console.log("process id",process.pid)

    setTimeout(() => {
        console.log("timoeut activé")
         res.send('hello this is finally working');

    },  5 * 60 * 1000);
})

app.get('/time',(req,res)=>{
    setTimeout(() => {
        console.log("tim    oeut activé")
        res.send('timeout deuxième fonction');

    },  1 * 60 * 1000);
})


    app.listen(3000,()=>{
        console.log("server on port 3000")
    })
    console.log("worker process are working!")
