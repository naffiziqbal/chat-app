import { useEffect, useState } from "react";
import Chatbox from "../../Components/ChatBox/Chatbox";
import { APIs } from "../../utils/APIs";
import avatar from "../../assets/icons8-male-user-50.png";
import Conversation from "../../Components/conversation/Conversation";


const Home = () => {
    const [chatMembers, setChatMembers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState(null)

    // const currentLoggedInUserId = '6564c99dd373dffed796b2ce' //! Tanvir
    const currentLoggedInUserId = '656566aad4fec0b3ce27c30d' //! Nishad

    useEffect(() => {
        const getUser = async (currentLoggedInUserId) => {
            const { data } = await APIs.getSingleUser(currentLoggedInUserId)
            setLoggedInUser(data.data)
        }
        getUser(currentLoggedInUserId)

        const getUserChats = async (currentLoggedInUserId) => {
            const { data } = await APIs.getUserAllChats(currentLoggedInUserId)
            setChatMembers(data?.data)
        }
        getUserChats(currentLoggedInUserId)
    }, [currentLoggedInUserId])

    // console.log(chat)

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
                        chatMembers.map(data => <Conversation data={data} key={data._id} currentUser={currentLoggedInUserId} />)
                    }
                </div>
            </div>
            {/* Right Side */}
            <div className="righ_side md:w-2/3 w-full">
                <Chatbox />
            </div>
        </div>
    );
};

export default Home;
