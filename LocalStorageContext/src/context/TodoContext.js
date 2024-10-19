import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todo:[
        {id:1,
        value:"message-1"}
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;