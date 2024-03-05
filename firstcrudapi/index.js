const http = require("http");
const port = 3000;
const server= http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json",
    });
    res.end(JSON.stringify({
        name:"Elie Makoda Kowo",
        age:12
    }));
});
server.listen(port,()=>{
    console.log("server listening on port ",port);
    console.log(`check the output on http://localhost:${port}`)
});