import React, { useState, useEffect } from 'react';
import axios from "axios";
import User from "./user"


export default function (props) {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    grabEmployees()
  }, [])

  const sortedEmps = 
    employees
      .filter(data => {
          if (props.currentSearchValue == null) {
              return data
          }
          else if (data.name.first.toLowerCase().includes(props.currentSearchValue.toLowerCase()) || data.name.last.toLowerCase().includes(props.currentSearchValue.toLowerCase())) {
              return data
          }
      }).sort((a, b) => { 
        if (props.currentSortState === "asc") {
          if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
          if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
        } else {
          if (a.name.first > b.name.first) return -1;
          if (a.name.first < b.name.first)return 1;
        }
        return 0;
 
  });

  
  const grabEmployees = async () => { 
    const res = await axios(`https://randomuser.me/api/?results=200&nat=us`)
    setEmployees(res.data.results)
  }

  return (
    <>
      {sortedEmps
          .map(u => <User key={u.cell} user={u} />)
      }
    </>
  )
};