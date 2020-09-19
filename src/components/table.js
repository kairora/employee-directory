import React from 'react';
import Employee from "./employee"

export default function () {
    return (
        <>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee />

                </tbody>
            </table>
        </>
    )
}