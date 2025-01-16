const express = require('express')
require('./Connection')
var EmpMODEL=require("./MODEL/employee")
const app = express()
app.use(express.json())

app.get('/',(req, res) =>{
  res.send('Hello World')
})

app.get('/trail',(req, res) =>
{
    res.send('podaaaaa')
})
    app.post("/add",async(req, res)=> {
      try{
        await(EmpMODEL(req.body).save)
        res.send({message: "Data added"})
      }catch (error){
        console.log(error)
      }

      
      
  })

  
app.listen(3000)