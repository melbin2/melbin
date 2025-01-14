import React, { useState } from 'react'

const State = () => {
    var[name,setname]=useState("ram")
  return (
      <div>
          <h3>welcome {name}</h3>
          <h4></h4>
    </div>
  )
}

export default State