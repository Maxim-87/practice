import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '10ef8ae6-1208-4d5f-8d59-502b969e25bb'
    }
})


export const todolistApi = {
    getTodolist() {
        return instance.get('/todo-lists')
    }
}