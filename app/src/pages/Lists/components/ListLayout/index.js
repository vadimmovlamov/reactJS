import PropTypes from "prop-types";

import User from "../../../../components/User/User";


const ListsLayout = ({ users, handleUserDelete, handleUsersCreate }) => {
    return (
        <div>
            <h1>Lists</h1>

            <button onClick={handleUsersCreate}>Create user</button>

            <div>
                {users.map((user) => (
                    <User
                        onDelete={handleUserDelete}
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        age={user.age}
                    />
                ))}
            </div>
        </div>
    )
}

ListsLayout.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        })
    )
}

export default ListsLayout;