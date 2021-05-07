import {createAction, ActionType, } from 'typesafe-actions'

const ADD_TODO = 'todos/ADD_TODO' 
const TOGGLE_TODO = 'todos/TOGGLE_TODO' 
const REMOVER_TODO = 'todos/REMOVER_TODO' 

let nextId = 1

export const addTodo = createAction(ADD_TODO, action =>(text: string) => action({
    id : nextId++,
    text
}))

export const toggleTodo = createAction(TOGGLE_TODO)<number>()
export const removeTodo = createAction(REMOVER_TODO)<number>()


const actions = {addTodo, toggleTodo, removeTodo}
type TodosAction = ActionType<typeof actions>


export type Todo ={
    id: number
    text: string
    done: boolean
}

type TodosState = Todo[]

const initialState: TodosState = []

function todos(state: TodosState = initialState, action:TodosAction): TodosState{
    switch(action.type){
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            })
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        case REMOVER_TODO:
            return state.filter(todo => todo.id !== action.payload)    
        default :
        return state
        }
}



export default todos