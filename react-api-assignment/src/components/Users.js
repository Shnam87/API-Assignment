import React from 'react'

const Users = ({ users }) => {
    return (
        <div>

            <div className="users-info">

                {
                    users.map(user => (

                        <div key={user.id} className="user-info">
                            <img src={user.avatar} className="avatar" alt={user.first_name + " " + user.last_name} />
                            <h3>{user.first_name + " " + user.last_name}</h3>
                            <h4><a href={"mailto:" + user.email}>Contact</a></h4>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Users