/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import { APIs } from "../utils/APIs";
import useUserChatsArray from "../hooks/useUserChatsArray";

export const UserContext = createContext()

const ContextProvider = ({ children }) => {
    const [chatMembers, setChatMembers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const id = localStorage.getItem('loggedInUser')

    useEffect(() => {
        const getCurrentUser = async (id) => {
            try {
                setLoading(true)
                const { data } = await APIs.getSingleUser(id)
                setCurrentUser(data?.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCurrentUser(id)
    }, [id])

    useEffect(() => {
        const getUserChats = async (id) => {
            try {
                const { data } = await APIs.getUserAllChats(id)
                setChatMembers(data?.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUserChats(currentUser?._id)
    }, [currentUser?._id])

    const data = { loading, setLoading, currentUser, setCurrentUser, chatMembers }

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}

export default ContextProvider
