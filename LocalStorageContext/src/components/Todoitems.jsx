import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function Todoitems({todo}) {
    const [isedit,setIsEdit] = useState(false);
    const [msg,setMsg]=useState("");
    const {updateTodo,deleteTodo,toggleTodo} = useTodo();
    const edit = ()=>{
        updateTodo(todo.id,{...todo,value:msg})
        setIsEdit(false);
    }
    const toggle=()=>{
        toggleTodo(todo.id);
    }
  return (
    <div>
        <input type="checkbox" onChange={toggle} checked={todo.completed}/>
        <input type="text" onvalue={msg}  onChange={(e)=>setMsg(e.target.value)} readOnly={!isedit}/>
        <button type="submit" onClick={()=>{
            if(todo.completed) return
            else if(isedit){
                edit()
            }
            else{
                setIsEdit((prev)=>!prev)
            }
        }}>{isedit?"edit":"submit"}</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todoitems