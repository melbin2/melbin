import { AppBar, Toolbar,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div><AppBar>
          <Toolbar>
              <h4>MY APP</h4>
              &nbsp;
              <Link to='/log'>
                  <Button variant='contained'>login</Button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>
              <Button variant='contained'>signup</Button>
              </Link>
              <Link to='/State'>
                  <Button variant='contained'>State</Button>
              </Link>
              <Link to='/c'>
                  <Button variant='contained'>counter</Button>
              </Link>
              <Link to='/Name'>
                  <Button variant='contained'>Name</Button>
              </Link>
              <Link to='/Api'>
                  <Button variant='contained'>Api</Button>
              </Link>
          </Toolbar>
      </AppBar>

      <br /><br /><br />
          
    </div>
  )
}

export default Navbar