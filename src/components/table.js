import React from 'react';
import Employee from "./employee"
import Headers from "./table-headers"

export default function () {
    return (
        <>
            <table className="table table-striped table-dark">
                <thead>
                    <tr><Headers /></tr>
                </thead>
                <tbody>
                    <Employee />
                </tbody>
            </table>
        </>
    )
}