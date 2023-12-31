/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import { APIs } from "../utils/APIs";
export const UserContext = createContext()

const ContextProvider = ({ children }) => {
    const [chatMembers, setChatMembers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const id = localStorage.getItem('loggedInUser')

    // Get Logged In User information
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

    // Get Chat list of Logged in User
    useEffect(() => {
        const getUserChats = async (id) => {
            try {
                const { data } = await APIs.getUserAllChats(id)
                setChatMembers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUserChats(id)
    }, [id])


    const data = { loading, setLoading, currentUser, setCurrentUser, chatMembers }

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}

export default ContextProvider
