import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";

const Chatbox = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        fetch(`/chat.json`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const singleUser = user.find(data => data?.id === id)


    const autoExpand = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setInputValue(textarea.value);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Add your custom logic here, for example, adding a new line break or submitting the form.
            alert('Enter key pressed without Shift!');
        }
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
                    <body>
                        <main className="mt-4 overflow-y-auto h-100% max-h-96">
                            <ul className="mb-4">
                                <li className="text-gray-600">User 1: Hello</li>
                                <li className="text-gray-600">User 2: Hi there</li>
                                <li className="text-gray-600">User 1: How are you?</li>
                                <li className="text-gray-600">User 2: I&apos;m doing well, thanks for asking</li>
                            </ul>
                        </main>
                    </body>
                    <footer className="mb-12">
                        <form className="flex absolute bottom-3 right-0 w-full items-center justify-between">
                            {/* <input
                                type="text"
                                className="flex-grow p-2 border rounded outline-none overflow-auto with"
                                onChange={handleInputChange}
                                value={text}
                                height={inputHeight}
                                placeholder="Enter your text here"
                            /> */}
                            <div className="p-2 bg-red-300">a</div>
                            <div className="p-2 bg-red-300">a</div>
                            <div className="p-2 bg-red-300">a</div>
                            <div className="p-2 bg-red-300">a</div>
                            <textarea
                                className="w-96 max-h-16 outline-none"
                                value={inputValue}
                                onChange={autoExpand}
                                onKeyDown={handleEnter}
                                placeholder="Type here..."
                                style={{ resize: 'none', overflow: 'hidden' }}
                            ></textarea>
                            <button type="submist"
                                className="bg-blue-500 text-white p-2 rounded max-h-10 items-center"
                            >Send</button>
                        </form>
                    </footer>
                </>
            }
        </div >
    );
};

export default Chatbox;
