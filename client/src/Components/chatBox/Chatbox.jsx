/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { LuSticker } from "react-icons/lu";
import { AiOutlineGif } from "react-icons/ai";
import { FaArrowLeft, FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji"
import { APIs } from "../../utils/APIs";
import { format } from "timeago.js";
import { io } from "socket.io-client"

const Chatbox = () => {
    const { id } = useParams()
    const socket = useRef()
    const [user, setUser] = useState([]) //? Getting chat user from database
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('') //? inputed message
    const [messages, setMessages] = useState([]) //? Getting Messages from DB
    const [onlineUser, setOnlineUser] = useState([])
    const [sentMessage, setSentMessage] = useState(null) // ? sent Message with Socket
    const [recieveMessage, setRecieveMessage] = useState(null) //? Recieved Message From Socket


    // ? Logged In User
    const currentUserid = '656566aad4fec0b3ce27c30d'

    //  ? Getting Users
    useEffect(() => {
        const getUser = async (id) => {
            const { data } = await APIs.getSingleUser(id)
            setUser(data?.data)
        }
        getUser(id)
    }, [id])

    // ? Caling the Messages From the Database
    useEffect(() => {
        const getMessages = async (id) => {
            const { data } = await APIs.getMessage(id)
            console.log(data)
            setMessages(data)
        }
        getMessages(id)
    }, [id])
    //? Connecting Socket To Server
    useEffect(() => {
        socket.current = io('ws://localhost:8080')
        socket.current.emit('add-users', currentUserid)
        socket.current.on('get-users', (user) => {
            setOnlineUser(user)
        })
    }, [currentUserid])
    // ? Send Message 
    useEffect(() => {
        if (sentMessage !== null) {
            socket.current.emit('send-message', sentMessage)
        }
    }, [sentMessage])

    // ? Recieve Message
    useEffect(() => {
        socket.current.on('recive-message', data => {
            setRecieveMessage(data)
        })
    }, [currentUserid])



    //  ? Handling Input field ** This Will Make the Input field Larger ** 
    const handleOnChange = (e) => {
        if (e.length > 0) {
            setIsTyping(true)
        }
        const text = e;
        setText(text);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // Post Logic Gose Here 
        const message = {
            senderId: currentUserid,
            chatId: id,
            text: text
        }
        console.log(message)

        //? Sent Message to MongoDB
        try {
            const { data } = await APIs.addMessage(message)
            console.log(data)
            setMessages([...messages, data])
            setText('')

        } catch (err) {
            console.log(err)
        }


    }


    //console.log(onlineUser)
    return (
        <div className={` h-screen relative`}>


            {user && <>
                <header className="shadow-inner bg-secondary text-text font-bold tracking-wide" >
                    <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                        <span className="flex flex-row items-center justify-between">
                            <figure>
                                <img src={user?.img} alt="" />
                            </figure>
                            <p className="text-start mx-3">{user?.name}</p>
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
                        <div className="w-full">{
                            messages.map(data => <div
                                className={` flex-col max-w-md my-2 h-12 rounded-lg flex items-end justify-end px-2  ${data?.senderId === currentUserid ? "text-white bg-accent" : ' justify-end flex border rounded-lg'}`}
                                key={data._id}>
                                <span>
                                    {data?.text}
                                </span>
                                <span>
                                    {format(data.createdAt)}
                                </span>
                            </div>)
                        }</div>
                    </main>
                </div>

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
                !user && <div className="bg-secondary h-screen flex items-center justify-center">
                    <p className="md:text-2xl ">Please Select a Chat to Get Started</p>
                </div>
            }

        </div >
    );
};

export default Chatbox;
