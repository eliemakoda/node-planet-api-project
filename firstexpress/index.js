const Express= require("express");
const port= 3000;
const app = new Express();
const students = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "major": "Computer Science"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 22,
      "major": "Biology"
    },
    {
      "id": 3,
      "name": "William Johnson",
      "age": 19,
      "major": "English Literature"
    }
    // ... more students
  ];
//   console.log(students);
  app.use((req,res,next)=>{
    console.log("calling the use method")
    console.log(`${req.method}, ${req.url}`);
    next()
  })
  app.use((Express.json()));
app.listen(3000, ()=>{
    console.log("app listening on port ",port);
    console.log(`check the output at http://localhost:${port}`)
});

app.get('/' , (req , res)=>{

   res.json(students);

});
app.get('/student/:id' , (req , res)=>{
    const id= req.params.id;
    let seen = false;
    students.forEach((student)=>{
        if (student.id==id){
            seen=true;
            res.json(student);
        }
        if(seen==false)
        {
            res.status(404).json({
                error:"not found"
            })
        }
    })

})
app.post('/student' , (req , res)=>{
 const fr={
    id: students.length+1,
      name: req.body.name,
      age: req.body.age,
      major: req.body.major
 };
 students.push(fr);
 console.log(students);
 res.json(fr);
});
