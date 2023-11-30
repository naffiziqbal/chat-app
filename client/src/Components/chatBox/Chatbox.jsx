import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";

const Chatbox = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    // console.log(id)

    useEffect(() => {
        fetch(`/chat.json`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const singleUser = user.find(data => data?.id === id)

    return (
        <div className={`lg:w-2/3 w-full py-5`}>
            {
                singleUser && <header className="shadow-sm" >
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
            }
        </div >
    );
};

export default Chatbox;
