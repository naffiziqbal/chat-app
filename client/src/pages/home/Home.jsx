import Chatbox from "../../Components/ChatBox/Chatbox";
import Conversation from "../../Components/ConverSation/Conversation";

const Home = () => {
    return (
        <div className="py-3">
            <main className="flex flex-row justify-between overflow-hidden">
                <Conversation />
                <Chatbox />
            </main>
        </div>
    );
};

export default Home;
