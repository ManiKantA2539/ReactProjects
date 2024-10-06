import React, { useContext } from "react";
import userContext from "./context/userContext";

export function Profile(){
    const {user} = useContext(userContext);
    if(!user) return <h1>Profile : Not</h1>
    return (
        <div>
            <h1>Profile : {user.username}</h1>
        </div>
    )
}