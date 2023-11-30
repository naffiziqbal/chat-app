import Chatbox from "../../Components/ChatBox/Chatbox";
import Conversation from "../../Components/ConverSation/Conversation";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <main className="flex flex-row justify-between ">
                <Conversation />
                <Chatbox />
            </main>
        </div>
    );
};

export default Home;
