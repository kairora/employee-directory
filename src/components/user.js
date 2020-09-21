import React from "react";
import dayjs from "dayjs"


export default ({ user }) => (
    <>
        <tr>
            <td><img alt={user.picture.name} src={user.picture.medium} /></td>
            <td className="align-middle">{user.name.first} {user.name.last}</td>
            <td className="align-middle">{user.cell}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{dayjs(user.dob.date).format("MM-DD-YYYY")}</td>
        </tr>
    </>
)