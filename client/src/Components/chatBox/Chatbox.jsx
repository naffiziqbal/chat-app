import { useEffect, useState } from "react";
import { HiOutlineDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { LuSticker } from "react-icons/lu";
import { AiOutlineGif } from "react-icons/ai";
import { FaArrowLeft, FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji"

const Chatbox = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('')

    useEffect(() => {
        fetch(`/chat.json`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const singleUser = user.find(data => data?.id === id)

    const handleOnChange = (e) => {
        if (e.key === "Enter") {
            console.log("13")
        }
        if (e.length > 0) {
            setIsTyping(true)
        }
        const text = e;
        setText(text);
    };

    const handleFormSubmit = () => {
        // Post Logic Gose Here 

    }
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            setText('')
            return handleFormSubmit()
        }

    }


    return (
        <div className={`lg:w-2/3 w-full relative`}>
            {
                singleUser && <>
                    <header className="shadow-inner bg-secondary text-text font-bold tracking-wide" >
                        <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                            <span className="flex flex-row items-center justify-between">
                                <figure>
                                    <img src={singleUser?.img} alt="" />
                                </figure>
                                <p className="text-start mx-3">{singleUser?.name}</p>
                            </span>
                            <div className="flex flex-row justify-between  w-2/12">
                                <HiVideoCamera />
                                <HiPhone />
                                <HiOutlineDotsVertical style={{ cursor: "pointer" }} />

                            </div>
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
                    {/*  Form  */}
                    <footer className="">
                        <form onSubmit={handleFormSubmit} className=" flex flex-row absolute bottom-3 right-0 w-full items-center justify-between">
                            <span className=" cursor-pointer "
                                onClick={() => setIsTyping(!isTyping)}
                            >
                                {
                                    <FaArrowLeft
                                        style={{
                                            width: '1.2rem',
                                            height: "1.2rem",
                                            rotate: isTyping ? "180deg" : '0deg',
                                            transition: ".3s ease"
                                        }}
                                    />
                                }

                            </span>


                            <div className={`flex justify-around ${isTyping ? "w-0" : "w-1/4"} duration-300 `}>
                                <LuSticker />
                                <AiOutlineGif />
                                <FaImage />
                            </div>

                            <div className="w-full flex  items-center justify-end">
                                <span className="w-full outline-none duration-300 rounded-3xl items-center justify-center overflow-hidden">
                                    <InputEmoji className="max-w-sm"
                                        value={text}
                                        onKeyDown={handleEnter}
                                        onChange={handleOnChange}
                                        placeholder="Type a message"
                                    />
                                </span>
                                <button type="submit"
                                    className="bg-blue-500 text-accent p-2 rounded max-h-10 items-center mx-3"
                                >{<IoSend />}</button>
                            </div>


                        </form>
                    </footer>
                </>
            }
            {
                !singleUser && <div className="bg-secondary h-screen flex items-center justify-center">
                    <p className="md:text-2xl ">Please Select a Chat to Get Started</p>
                </div>
            }
        </div >
    );
};

export default Chatbox;
