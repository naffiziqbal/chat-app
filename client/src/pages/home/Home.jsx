import Chatbox from "../../Components/ChatBox/Chatbox";
import Conversation from "../../Components/ConverSation/Conversation";
import { APIs } from "../../utils/APIs";

const Home = () => {
    const response = APIs.getAllUser()
    response.then(data => console.log(data.data))
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
