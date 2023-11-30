import { IoMdAddCircleOutline } from "react-icons/io";
import avatar from "../../assets/icons8-male-user-50.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Conversation = () => {
    const [recipent, setRecipent] = useState([]);

    useEffect(() => {
        fetch("/chat.json")
            .then((res) => res.json())
            .then((data) => setRecipent(data));
    }, []);


    return (
        <div className={`lg:w-1/3 w-1/4 h-screen shadow-xl py-5`}>
            <header className="shadow-sm">
                <div className="flex flex-row flex-nowrap justify-between items-center p-4">
                    <span className="flex flex-row items-center justify-between">
                        <figure>
                            <img src={avatar} alt="" />
                        </figure>
                        <p className="text-start mx-3 md:block hidden">User Name</p>
                    </span>
                    <span className="md:block hidden">

                        <IoMdAddCircleOutline />
                    </span>
                </div>
            </header>

            {recipent.map((data) => (

                <ul key={data?.id}>
                    <li>
                        <Link to={`/chat/${data?.id}`}>
                            <div className="flex items-center justify-start px-4 py-2">
                                <figure>
                                    <img src={data?.img} alt="" />
                                </figure>
                                <p className="mx-4 font-semibold md:block hidden">{data?.name}</p>
                            </div>
                        </Link>
                    </li>
                    <hr style={{ width: "80%", margin: "1rem auto", color: "#eee", }} />
                </ul>
            ))}
        </div >
    );
};

export default Conversation;
