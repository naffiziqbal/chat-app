/* eslint-disable  */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { APIs } from "../../utils/APIs";

const Conversation = ({ data, currentUser }) => {
    const [userData, setUserData] = useState(null)
    //  Get User
    useEffect(() => {
        // Find User
        const userId = data?.members?.find(id => id !== currentUser)
        const getUserData = async (userId) => {
            try {
                const { data } = await APIs.getSingleUser(userId)
                setUserData(data?.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUserData(userId)

    }, [])
    // 

    return (
        <div className={``}>


            <ul key={userData?._id}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? " text-primary " : undefined} to={`/chat/${userData?._id}`}>
                        <div className="">
                            <figure>
                                <img src={userData?.img} alt="" />
                            </figure>
                            <p className="mx-4 font-semibold">{userData?.name}</p>
                        </div>
                    </NavLink>
                </li>
                <hr style={{ width: "80%", margin: "1rem auto", color: "#eee", }} />
            </ul>

        </div >
    );
};

export default Conversation;
