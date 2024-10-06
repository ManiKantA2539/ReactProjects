import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
            {console.log(children)}
        </userContext.Provider>
    )
}

export default UserContextProvider;