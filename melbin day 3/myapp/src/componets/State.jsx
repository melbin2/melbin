import React, { useState } from 'react'
import { TextField,Button } from '@mui/material'

const State = () => {
    var[name,setname]=useState("ram")
    var [val,setval]=useState()

      const handleinput =(e)=>{
      console.log(e.target.value)
      setname(e.target.value)
    }
    const Subhandler=()=>{
      console.log('submitted name: '+name)
      setval(name)
      setname("")
    }
    
  return (
      <div>
          <h3>Welcome {val}</h3>
           <TextField id="outlined-basic"label="name"variant="outlined" value={name}onChange={handleinput}/><br></br>
           <br></br><Button variant="contained" onClick={Subhandler}>submit </Button>

          <h4></h4>

    </div>
  )
}

export default State