import React from "react";

export default ({ user }) => (
    <>
        <tr>
            <td><img alt={user.picture.name} src={user.picture.medium} /></td>
            <td className="align-middle">{user.name.first} {user.name.last}</td>
            <td className="align-middle">{user.cell}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.dob.date}</td>
        </tr>
    </>
)