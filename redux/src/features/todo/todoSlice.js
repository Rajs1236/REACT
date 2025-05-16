import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //jaise usestate m hota tha waise hi yha p bhi do
        //cheez milegi ek state doosra action
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
                //payload ek pbject h usme kuch bhi a skta h
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        editTodo:(state,action)=>{
            state.todos=(state.todos.filter((todo)=>todo.id===action.payload)).text=action.text
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer