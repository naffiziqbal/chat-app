import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { LuSticker } from "react-icons/lu";
import { AiOutlineGif } from "react-icons/ai";
import { FaImage } from "react-icons/fa6";



const Chatbox = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        fetch(`/chat.json`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const singleUser = user.find(data => data?.id === id)


    // const autoExpand = (event) => {
    //     const textarea = event.target;
    //     textarea.style.height = 'auto';
    //     textarea.style.height = `${textarea.scrollHeight}px`;
    //     setInputValue(textarea.value);
    // };

    const handleEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Add your custom logic here, for example, adding a new line break or submitting the form.
            alert('Enter key pressed without Shift!');
        }
    };
    const handleInputChange = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setInputValue(textarea.value);
        const inputText = e.target.value;
        setInputValue(inputText);
        // Check if the user is typing
        setIsTyping(inputText.length > 0);
    };
    return (
        <div className={`lg:w-2/3 w-full py-5 relative`}>
            {
                singleUser && <>
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
                    <div>
                        <main className="mt-4 overflow-y-auto h-100% max-h-96">
                            <ul className="mb-4">
                                <li className="text-gray-600">User 1: Hello</li>
                                <li className="text-gray-600">User 2: Hi there</li>
                                <li className="text-gray-600">User 1: How are you?</li>
                                <li className="text-gray-600">User 2: I&apos;m doing well, thanks for asking</li>
                            </ul>
                        </main>
                    </div>
                    <footer className="">
                        <form className="flex flex-row absolute bottom-3 right-0 w-full items-center justify-between">
                            <span className=" mx-1 border  cursor-pointer "
                                onClick={() => setIsTyping(!isTyping)}
                            >
                                {
                                    <IoIosArrowDropleft
                                        style={{
                                            width: '2rem',
                                            height: "2rem",
                                            rotate: isTyping ? "180deg" : '0deg',
                                            transition: ".3s ease"
                                        }}
                                    />
                                }

                            </span>


                            <div className={`flex justify-between ${isTyping ? "w-0" : "w-1/6"} duration-300 `}>
                                <LuSticker />
                                <AiOutlineGif />
                                <FaImage />
                            </div>
                            <textarea
                                className="w-96 max-h-24 outline-none duration-300 rounded-3xl px-4"
                                style={{ width: isTyping ? '100%' : '60%', resize: 'none', overflow: 'hidden' }}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleEnter}
                                placeholder="Type here..."
                            ></textarea>
                            <button type="submist"
                                className="bg-blue-500 text-white p-2 rounded max-h-10 items-center mx-3"
                            >Send</button>
                        </form>
                    </footer>
                </>
            }
        </div >
    );
};

export default Chatbox;
