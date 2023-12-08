import { useEffect, useState } from "react";
import { APIs } from "../../utils/APIs";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await APIs.getAllUser()
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    return (
        <div className="h-screen">
            <h1>All Users</h1>
        </div>
    );
};

export default Users;
