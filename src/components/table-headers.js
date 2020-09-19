import React, { Component } from 'react';



export default class TableHeaders extends Component {
    createTableHeaders = (props) => {
        let headers = ["Image", "Name", "Phone", "Email", "DOB"];

        return headers.map(header => {
            return <th scope="col" className="text-center">{header}</th>
        });
    }
    render () {
        return ( 
            <>
            {this.createTableHeaders()}
            </>
        )    
    }
}