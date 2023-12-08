import { useEffect, useState } from "react";
import Chatbox from "../../Components/ChatBox/Chatbox";
import { APIs } from "../../utils/APIs";
import avatar from "../../assets/icons8-male-user-50.png";
import Conversation from "../../Components/conversation/Conversation";


const Home = () => {
    const [chatMembers, setChatMembers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState(null)

    const currentUserid = '656566aad4fec0b3ce27c30d'

    useEffect(() => {
        const getUser = async (currentUserid) => {
            const { data } = await APIs.getSingleUser(currentUserid)
            setLoggedInUser(data.data)
        }
        getUser(currentUserid)

        const getUserChats = async (currentUserid) => {
            const { data } = await APIs.getUserAllChats(currentUserid)
            setChatMembers(data?.data)
        }
        getUserChats(currentUserid)
    }, [currentUserid])

    // //console.log(chat)

    return (
        <div className="overflow-hidden h-screen flex">
            {/* Left Side Viee */}
            <div className="left_side md:w-1/3 w-full">
                <header className="">
                    {/* Heading */}
                    <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                        <span className="flex flex-row items-center justify-between">
                            <figure>
                                <img src={avatar} alt="" />
                            </figure>
                            <p className="text-start mx-3 lg:block hidden">{loggedInUser?.name}</p>
                        </span>
                        <span className="font-bold text-3xl p-2">
                            Chats
                        </span>
                    </div>
                </header>
                <hr />
                <div className="">
                    {
                        chatMembers.map(data => <Conversation data={data} key={data._id} currentUser={currentUserid} />)
                    }
                </div>
            </div>
            {/* Right Side */}
            <div className="righ_side md:w-2/3 w-full">
                {/* <Chatbox currentUserid={currentUserid} /> */}
            </div>
        </div>
    );
};

export default Home;
