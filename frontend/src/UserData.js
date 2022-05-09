import React from 'react'


function UserData({ props }) {

    return (
        <>
            <tr>
                <th>fullName</th>
                <th>Email</th>
                <th>password</th>
            </tr>
            <tr>
                <td>{props.data.fullname}</td>
                <td>{props.data.email}</td>
                <td>{props.data.phone}</td>
                <td> <button onClick={() => {
                    props.deleteUser(props.data._id);
                }}>Delete</button> </td>
            </tr>
        </>
    );
}

export default UserData