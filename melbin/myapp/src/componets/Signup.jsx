import { TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Signup page</h1>
      <TextField label="email "variant="standard"></TextField><br />
     <br/><TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"></TextField>
      <br/><br/>
      <br /><button variant="contained">sign up</button>
    </div>
  )
}

export default Signup