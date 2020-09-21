import React, { useState, useEffect } from 'react';
import axios from "axios";
import User from "./user"


export default function () {
    const [employees, setEmployees] = useState([])
  
    useEffect(() => {
      grabEmployees()
    }, [])
  
    const grabEmployees = async () => { 
      const res = await axios(`https://randomuser.me/api/?results=200&nat=us`)
      console.log(res.data.results)
        setEmployees(res.data.results)
    }
  
    return (
      <>
        {employees.map(u => <User key={u.cell} user={u} />)}
      </>
    )
  };