import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [data,setData] = useState("");
    const {addTodo} = useTodo();
    const handleChange = (value)=>{
        setData((prev)=>prev+value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo({data,completed:true});
        setData=""
    }
  return (
    <div>
        <form>
            <input type="text" value={data} onChange={(e)=>handleChange(e.target.value)} />
            <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default TodoForm