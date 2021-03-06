import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoInsert from '../Componets/TodoInser'
import TodoList from '../Componets/TodoList'
import { Rootstate } from '../modules'
import { addTodo, removeTodo, toggleTodo } from '../modules/todo'

function TodoApp(){
    const todos = useSelector((state: Rootstate) => state.todos)
    const dispatch = useDispatch()

    const onInsert = (text: string )=>{
        dispatch(addTodo(text))
    }

    const onToggle = (id: number) =>{
        dispatch(toggleTodo(id))
    }

    const onRemove = (id: number) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </>
    )

}

export default TodoApp