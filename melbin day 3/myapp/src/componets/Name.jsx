import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'

const Name = () => {
    var[name,setname]=useState()
    const subhandler=()=>{
        setname("bazzy")
    }
    const sg=()=>{
      setname("madan")
    }
    const sui=()=>{
      setname("ebin")
    }
  return (
    <div>
        <h1>welcome {name}</h1>
          <Button variant="outlined" onClick ={subhandler}>dancer</Button>
          <Button variant="outlined" onClick={sg}>12 adi</Button>
          <Button variant="outlined" onClick={sui}>mandan</Button>
    </div>
  )
}


export default Name