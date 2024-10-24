import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
        </div>
    );
};

export default Users;