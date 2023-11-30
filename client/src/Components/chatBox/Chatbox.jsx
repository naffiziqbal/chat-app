import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";

const Chatbox = ({ isChatActive }) => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    // console.log(id)

    useEffect(() => {
        fetch(`/chat.json`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const singleUser = user.find(data => data?.id === id)
    console.log(isChatActive)

    return (
        <div className={`${isChatActive ? "m-0" : "m-[-99rem]"}lg:w-2/3 w-full  lg:m-0 py-5`}>
            <header className="shadow-sm" >
                <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                    <span className="flex flex-row items-center justify-between">
                        <figure>
                            <img src={singleUser?.img} alt="" />
                        </figure>
                        <p className="text-start mx-3">{singleUser?.name}</p>
                    </span>
                    <HiOutlineDotsVertical style={{ cursor: "pointer" }} />
                </div>
            </header>
        </div >
    );
};

export default Chatbox;
