import {useState,useEffect} from "react"
import axios from "axios"


export default function useCurrency(curr){
    const [data,setData] = useState({});
    useEffect(()=>{
        const arr = async()=>{
            try {
                const res = await axios.get((`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`));
                setData(res?.data[curr]);
            } catch (error) {
                console.log(error);
            }
        
        }
        arr();
    },[curr])
    return data;
}

