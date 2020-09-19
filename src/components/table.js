import React from 'react';
import Employee from "./employee";
import Headers from "./table-headers";
import _ from "lodash";


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