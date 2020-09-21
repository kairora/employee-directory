import React, { useState, useEffect } from 'react';
import axios from "axios";
import User from "./user"
import search from './search';



export default function (props) {
    const [employees, setEmployees] = useState([])
    
    
    useEffect(() => {
      grabEmployees()
    }, [search])
  
    const grabEmployees = async () => { 
      const res = await axios(`https://randomuser.me/api/?results=200&nat=us`)
    //   console.log(res.data.results)
      setEmployees(res.data.results)
    }
  
    return (
      <>
        {employees
            .filter(data => {
                // console.log(data.name.first.toLowerCase())
                if (props.currentSearchValue == undefined) {
                    return data
                }
                else if (data.name.first.toLowerCase().includes(props.currentSearchValue.toLowerCase())) {
                    // console.log(data)
                    return data
                }
            })
            .map(u => <User key={u.cell} user={u} />)}
      </>
    )
  };