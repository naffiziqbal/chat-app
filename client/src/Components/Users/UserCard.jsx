
import avater from '../../assets/icons8-male-user-50.png'
import Button from '../Buttons/Button'
import { APIs } from '../../utils/APIs'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useContext} from 'react'
import { UserContext } from '../../context/UserContext'
/* eslint-disable */
const UserCard = ({ data }) => {
    const navigate = useNavigate()
    const { loading, setLoading, currentUser } = useContext(UserContext)

    const { profileImg, name, _id } = data

    
    const chatUser = {
        senderId: currentUser?._id,
        reciverId: _id
    }
    const { senderId, reciverId } = chatUser

    const handleCreateChat = async () => {
        try {
            const { data } = await APIs.createChat({ senderId, reciverId })
            if (data.success) {
                Swal.fire({
                    title: "Success",
                    text: "Chat Created Successfully",
                    icon: "success"
                })
                navigate('/')
            }
        } catch (error) {
            Swal.fire({
                title: "Failed",
                text: "Chat Already Exists",
                icon: "error"
            })
        }
        // console.log(data)
    }

    return (
        <div className="card bg-secondary p-3  rounded-lg md:h-[12rem] flex flex-col justify-between">
            <div className="flex flex-col items-center">
                <figure>
                    <img src={profileImg || avater} alt="" />
                </figure>

                <h3>{name}</h3>
            </div>
            <Button buttonEvent={handleCreateChat} data={"Create Chat"} />
        </div>
    )
}

export default UserCard
