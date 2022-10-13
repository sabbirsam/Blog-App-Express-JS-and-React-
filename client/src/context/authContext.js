import axios from "axios"
// import { useEffect } from "react"
import {createContext,useEffect, useState} from "react"

/**
 * use for local storage
 */
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    //await axios.post("/auth/login", inputs) use It here from loginjsx
    //login and add local storage data
    const login = async (inputs)=>{
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data)
    }
    //logout and remove the local storate data
    const logout = async (inputs)=>{
        await axios.post("/auth/logout");
        setCurrentUser(null)
    }

    // add / update the local storage by using useeffect
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));

    }, [currentUser]);

    //now return this to add as a prop in index 
    return(
        <AuthContext.Provider value={{currentUser, login, logout}} >{children}</AuthContext.Provider>
    )

}