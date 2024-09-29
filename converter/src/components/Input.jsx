import React,{useState} from "react";
const Input = ({value,handle,currency}) => {
    return(
        <div>
            <input 
                type="number" 
                defaultValue=""
                value={value}
                onChange={(e) => handle && handle(e.target.value)}
            />
            <select>
                {currency && currency.length > 0 ? (
                    currency.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                    ))
                ) : (
                    <option disabled>No currencies available</option>
                )}
            </select>
        </div>
    )
}
export default Input;