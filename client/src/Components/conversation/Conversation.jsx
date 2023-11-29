import { IoMdAddCircleOutline } from "react-icons/io";
import avatar from '../../assets/icons8-male-user-50.png'
const Conversation = () => {
    return (
        <div className="w-1/3 h-screen shadow-xl py-5">
            <header className="shadow-sm">
                <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                    <span className="flex flex-row items-center justify-between">
                        <figure><img src={avatar} alt="" /></figure>
                        <p className="text-start mx-3">Name</p>
                    </span>
                    <IoMdAddCircleOutline />
                </div>
            </header>
            {/* <hr style={{ width: "80%", margin: "1rem auto", color: "#eee",  }} /> */}
        </div>
    );
};

export default Conversation;
