import { useContext } from "react";
import avatar from "../../assets/icons8-male-user-50.png";
import Conversation from "../../Components/conversation/Conversation";
import { UserContext } from "../../context/UserContext";
import Chatbox from "../../Components/chatBox/Chatbox";


const Home = () => {
    const userlocation = location.pathname === '/'
    const { loading, currentUser, chatMembers } = useContext(UserContext)
    if (loading) {
        return <div className="h-screen">Loading ....</div>
    }
    return (
        <div className="overflow-hidden flex ">
            {/* Left Side View */}
            <div className={`${userlocation ? "left_side md:w-1/3 w-full h-screen" : "hidden"}`}>
                <header className="">
                    {/* Heading */}
                    <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                        <span className="flex flex-row items-center justify-between">
                            <figure>
                                <img src={avatar} alt="" />
                            </figure>
                            <p className="text-start mx-3">{currentUser?.name}</p>
                        </span>
                        <span className="font-bold text-3xl p-2">
                            Chats
                        </span>
                    </div>
                </header>
                <hr />
                <div className="">
                    {
                        chatMembers?.map(data => <Conversation data={data} key={data._id} currentUser={currentUser?._id} />)
                    }
                </div>
            </div>

            {/* Right Side */}
            <div className="righ_side w-full">
                <Chatbox />
            </div>
        </div>
    );
};

export default Home;
