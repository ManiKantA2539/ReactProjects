import React,{useState} from "react";
const Input = ({value,handle}) => {
    return(
        <div>
            <input 
                type="number" 
                defaultValue=""
                value={value}
                onChange={(e) => handle && handle(e.target.value)}
            />
        </div>
    )
}
export default Input;