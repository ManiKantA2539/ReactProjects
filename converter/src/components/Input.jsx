import React from "react";
const Input = ({...props}) => {
    return(
        <div>
            <input 
                type="number" 
                value={props.value}
                onChange={(e) => props.handle && props.handle(e.target.value)}
            />
            <select 
                value={props.selected_curr}
                onChange={(e)=>{props.currency_change && props.currency_change(e.target.value)}}
            >
                {props.currency && props.currency.length > 0 ? (
                    props.currency.map((curr) => (
                        <option key={curr} value={curr} >{curr}</option>
                    ))
                ) : (
                    <option disabled>No currencies available</option>
                )}
            </select>
        </div>
    )
}
export default Input;