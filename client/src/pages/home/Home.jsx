import { useLocation } from "react-router-dom";
import Chatbox from "../../Components/ChatBox/Chatbox";
import Conversation from "../../Components/ConverSation/Conversation";
import { useState } from "react";

const Home = () => {
    const [isChatActive, setIsChatActive] = useState(false)

    // const location = useLocation()
    // console.log(location.pathname)
    console.log(isChatActive)

    return (
        <div className="py-3 overflow-hidden">
            <main className="flex flex-row justify-between ">
                <Conversation isChatActive={isChatActive} setIsChatActive={setIsChatActive} />
                <Chatbox isChatActive={isChatActive} setIsChatActive={setIsChatActive} />
            </main>
        </div>
    );
};

export default Home;
