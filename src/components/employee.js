import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/spinner"
import User from "./user"



// export default class Employees extends Component {

//     state = {
//         image: null,
//         Name: "",
//         Phone: "",
//         Email: "",
//         DOB: "",
//         loading: false
//     }

    

//     componentDidMount() {
//         this.fetchRandomEmployee()
//     }


//     fetchRandomEmployee = () => {
//         this.setState({ loading: true })
//         axios("https://randomuser.me/api/?results=100&nat=us/")
//             .then(res => {
//                 console.log(res)
//                 res.data.results.map(
//                 this.setState({ 
//                     image: res.data.results[0].picture.medium,
//                     firstName: res.data.results[0].name.first,
//                     lastName: res.data.results[0].name.last,
//                     phone: res.data.results[0].cell,
//                     email: res.data.results[0].email,
//                     DOB: res.data.results[0].dob.date,
//                     loading: false 
//                 })
            
//                 )
//             })
//             .catch(err => console.log(err))   
//     }

//     renderEmployee = () => {
//         // ternary
//         return (this.state.image && !this.state.loading ? 
//             <>
//                 <td><img alt={this.state.name} src={this.state.image} /></td> 
//                 <td className="align-middle">{this.state.firstName} {this.state.lastName}</td>
//                 <td className="align-middle">{this.state.phone}</td>
//                 <td className="align-middle">{this.state.email}</td>
//                 <td className="align-middle">{this.state.DOB}</td> 
//             </>
//             : null
//         )
//     }

//     render() {
//         return (
//             <>
//                 {/* short-circuiting */}
//                 {this.state.loading && <Spinner />}
//                 { this.renderEmployee() }
                
//             </>
//         )
//     }

// }


export default function App() {
    const [employees, setEmployees] = useState([])
  
    useEffect(() => {
      grabEmployees()
    }, [])
  
    const grabEmployees = async () => { 
      const res = await axios(`https://randomuser.me/api/?results=100&nat=us/`)
        setEmployees(res.data.results)
    }
  
    return (
      <>
        {employees.map(u => <User user={u} />)}
      </>
    )
  };