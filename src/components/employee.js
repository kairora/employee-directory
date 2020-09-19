import React, { Component } from 'react';
import axios from "axios";
import Spinner from "../components/spinner"

// export default function () {
//     return (
//         <>
//             <tr>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>496-555-5555</td>
//                 <td>marko@gme.com</td>
//                 <td>05/08/86</td>
//             </tr>
//         </>
//     )
// }

export default class Employees extends Component {

    state = {
        image: null,
        Name: "",
        Phone: "",
        Email: "",
        DOB: "",
        loading: false
    }

    componentDidMount() {
        this.fetchRandomEmployee()
    }

    grabEmployee = (res) => {
        let employee = res.data.results[0];
        
        return employee.map(data => {
            this.setState({ 
                image: data.picture.medium,
                Name: data.name.first + data.name.last,
                Phone: "",
                Email: "",
                DOB: "",
                loading: false 
            })
        })
            
    }

    fetchRandomEmployee = () => {
        this.setState({ loading: true })
        axios("https://randomuser.me/api/")
            .then(res => {
                console.log(res)
                // {this.grabEmployee(res)}
                this.setState({ 
                    image: res.data.results[0].picture.medium,
                    firstName: res.data.results[0].name.first,
                    lastName: res.data.results[0].name.last,
                    phone: res.data.results[0].cell,
                    email: res.data.results[0].email,
                    DOB: res.data.results[0].dob.date,
                    loading: false 
                })
            })
            .catch(err => console.log(err))
            
        }

    renderImage = () => {
        // ternary operator
        return this.state.image && !this.state.loading ? <td><img alt={this.state.name} src={this.state.image} /></td> : null
    }

    render() {
        return (
            <>
                {/* short-circuiting */}
                {this.state.loading && <Spinner />}
                { this.renderImage() }
                <td>{this.state.firstName} {this.state.lastName}</td>
                <td>{this.state.phone}</td>
                <td>{this.state.email}</td>
                <td>{this.state.DOB}</td>
            </>
        )
    }

    // createTableHeaders = (props) => {
    //     let headers = ["Image", "Name", "Phone", "Email", "DOB"];
        
    //     return headers.map(header => {
    //         return <td scope="col">{header}</td>
    //     });
    // }

    // render () {
    //     return ( 
    //         <>
    //         {this.createTableHeaders()}
    //         </>
    //     )    
    // }
}
