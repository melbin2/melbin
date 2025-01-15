import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Api = () => {
    const [data,setdata]=React.useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setdata(res.data)
    }
    )

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell>city</TableCell>
                               <TableCell>Email</TableCell>
                            </TableRow>
                            </TableHead>    
                            <TableBody> 
                                {data.map((val,index)=>{
                                    return(
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.address.city}</TableCell>
                                <TableBody>{val.email}</TableBody>
                        </TableRow>
                                )})}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api