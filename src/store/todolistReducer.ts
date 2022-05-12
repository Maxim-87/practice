import {todolistApi} from "../api/api";
import {TodolistType} from "../App";

export type AddTodolistsActionType = {
    type: "ADD_TODOLISTS",
    payload: any
}

const InitialState: TodolistType[] = []

export const todolistReducer = (state = InitialState, action: AddTodolistsActionType) => {
        switch (action.type) {
            case 'ADD_TODOLISTS':
                return action.payload
            default:
                return state
        }
}

export const addTodolistsAC = (todolists: Array<TodolistType>) => {
    return {type: 'ADD_TODOLISTS', payload: todolists}
}

export const fetchTodolistsTC = () => {
    return ( dispatch : any) => {
        todolistApi.getTodolist()
            .then((res) => {
                dispatch(addTodolistsAC(res.data))
            })
    }
}