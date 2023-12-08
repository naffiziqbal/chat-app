import { useEffect, useState } from "react";
import { APIs } from "../../utils/APIs";
import UserCard from "../../Components/Users/UserCard";
import Search from "../../Components/Search/Search";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await APIs.getAllUser()
                setUsers(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    console.log(users)
    return (
        <div className="min-h-screen h-screen p-12">
            <h3>Select User To Chat</h3>
            <Search />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full my-12">
                {
                    users?.map(data => <UserCard data={data} key={data._id} />)
                }
            </div>
        </div>
    );
};

export default Users;
