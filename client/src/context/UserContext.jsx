import { createContext, useEffect, useState } from "react";
import { APIs } from "../utils/APIs";

export const UserContext = createContext()

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const id = localStorage.getItem('loggedInUser')
    console.log(id)

    useEffect(() => {
        const getCurrentUser = async (id) => {
            try {
                setLoading(true)
                const { data } = APIs.getSingleUser(id)
                setCurrentUser(data?.data)
                console.log(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCurrentUser(id)
    }, [id])

    const data = { loading, setLoading, currentUser, setCurrentUser }

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}

export default ContextProvider
