import { useContext, useEffect, useState } from "react";
import { APIs } from "../../utils/APIs";
import UserCard from "../../Components/Users/UserCard";
import Search from "../../Components/Search/Search";
import { UserContext } from "../../context/UserContext";

const Users = () => {
    const [users, setUsers] = useState([])
    const { currentUser } = useContext(UserContext)

    useEffect(() => {
        const getUsers = async () => {
            try {
                let { data } = await APIs.getAllUser()
                data = data?.data?.filter(data => data?._id !== currentUser._id)
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [currentUser._id])
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
