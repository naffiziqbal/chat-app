/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { LuSticker } from "react-icons/lu";
import { AiOutlineGif } from "react-icons/ai";
import { FaArrowLeft, FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji"
import { APIs } from "../../utils/APIs";
import { format } from "timeago.js";
import { io } from "socket.io-client"
import { UserContext } from "../../context/UserContext";
import './Chatbox.css'

const Chatbox = () => {
    const { id } = useParams()
    const socket = useRef()
    const loggedInUser = localStorage.getItem('loggedInUser')
    const [user, setUser] = useState([]) // Getting chat user from database
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('') // inputed message
    const [messages, setMessages] = useState([]) // Getting Messages from DB
    const [chatMember, setChatMember] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sentSocketMessage, setSentSocketMesssage] = useState(null)
    const [recievedSocketMessage, setrecievedSocketMesssage] = useState(null)
    //  Logged In User
    const { currentUser } = useContext(UserContext)


    // Get User To Chat.....  ** Header Information **
    useEffect(() => {
        const getUser = async () => {
            const { data } = await APIs.getSingleUser(id)
            setUser(data?.data)
        }
        getUser()
    }, [id])
    //  Find Specific Chat For Users
    useEffect(() => {
        const findChat = async () => {
            try {
                const { data } = await APIs.userSingleChat(loggedInUser, id)
                setChatMember(data)
            } catch (err) { console.log(err) }
        }
        findChat()
    }, [id, loggedInUser])
    //  Caling the Messages From the Database
    useEffect(() => {
        const getMessages = async (chatId) => {
            const { data } = await APIs.getMessage(chatId)
            setMessages(data)
        }
        getMessages(chatMember?._id)
    }, [chatMember?._id])

    //   Handling Input field ** This Will Make the Input field Larger ** 
    const handleOnChange = (e) => {
        if (e.length > 0) {
            setIsTyping(true)
        }
        const text = e;
        setText(text);
    };
    // *** Socket Integration ***
    useEffect(() => {
        socket.current = io('http://localhost:8000')
        socket.current.emit('add-users', currentUser?._id)
        socket.current.on('get-users', (users) => {
            // console.log(users)
            setOnlineUsers(users)
        })
    }, [currentUser])

    // *** send Message to socket
    useEffect(() => {
        if (sentSocketMessage !== null) {
            socket.current.emit('send-message', sentSocketMessage)
        }
    }, [sentSocketMessage])

    // *** recieve Message 
    useEffect(() => {
        socket.current.on('recieve-message', (data) => {
            console.log(data, "Recieved Data")
            setrecievedSocketMesssage(data)
        })

    })

    useEffect(() => {
        console.log(recievedSocketMessage)
        if (recievedSocketMessage !== null) {
            console.log(recievedSocketMessage)
            setMessages([...messages, recievedSocketMessage])
        }
    }, [messages, recievedSocketMessage])

    // Post Message to Databse
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // Post Logic Gose Here 
        const message = {
            senderId: currentUser?._id,
            chatId: chatMember?._id, // Specific Chat Id of Both User
            text
        }
        if (message.text === '') return alert('Type Message')

        // Sent Message to MongoDB
        try {
            const { data } = await APIs.addMessage(message)
            setMessages([...messages, data])
            setText('')

        } catch (err) {
            console.log(err)
        }

        // *** send message to socket
        const recieverId = chatMember?.members?.find(data => data?._id !== currentUser?._id)
        console.log(recieverId)
        setSentSocketMesssage({ text, recieverId })
    }

    return (
        <div className={`overflow-hidden relative h-screen`}>
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
                <div className="overflow-auto h-full bg-background  chatbox">
                    <main className="chat-body">
                        {/* Sender Message */}
                        <div className="w-full px-2">{
                            messages.map(data => <div
                                className={`w-fit duration-500 flex flex-col  my-2   break-words rounded-lg px-2 ${data?.senderId === currentUser?._id ? "text-white bg-accent chat-own" : 'bg-secondary'}`}
                                key={data._id}>

                                <span className="max-w-lg">
                                    {data?.text}
                                </span>
                                <span className="text-end opacity-70">
                                    {format(data.createdAt)}
                                </span>
                            </div>)
                        }</div>
                    </main>

                    <footer className="w-full justify-between z-10 bg-secondary">
                        <form onSubmit={handleFormSubmit} className=" flex flex-row items-center ">
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
                                <span className="w-full outline-none duration-300 rounded-3xl items-center justify-center">
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
                </div>

            </>
            }
            {
                !user && <div className="bg-secondary h-screen flex items-center justify-center">
                    <p className="md:text-2xl ">Please Select a Chat to Get Started or <Link to={'/users'}><small className="underline text-accent">Find Friends.</small></Link> </p>
                </div>
            }

        </div >
    );
};

export default Chatbox;
