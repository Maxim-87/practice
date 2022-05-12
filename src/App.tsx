import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {addEquipment, deleteEquipment} from "./store/countReducer";
import {v1} from 'uuid'
import {Equipment} from "./components/Equipment";
import {fetchTodolistsTC} from "./store/todolistReducer";
import Todolist from './components/todolist';


export type TodolistType = {
    id: string,
    addedDate?: string,
    order?: string,
    title: string
}

export type equipmentType = {
    title: string,
    model: string,
    year: number,
    status: string,
    id: string
}

export const App = () => {

    const dispatch = useDispatch()

    const [title,setTitle] = useState<string>('')
    const [status,setStatus] = useState<string>('')

    const equipments: Array<equipmentType> = useSelector<AppRootStateType, Array<equipmentType>>((state) => state.equipments)
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    console.log(todolists)


    useEffect(() => {
            dispatch(fetchTodolistsTC())
    }, [])



    const add = () => {
        let newEquipment =  {title: `${title}`, model: 'VS-25', year: 2022, status: `${status}`, id: v1()}
        dispatch(addEquipment(newEquipment))
        setStatus('')
        setTitle('')
    }

    const deleteEq = (id:string) => {
        let newEquipments = equipments.filter(e => e.id !== id)
        dispatch(deleteEquipment(newEquipments))
    }

    return (
        <div className={'App'}>
            <div>
                {todolists.map(t =>
                    <Todolist title={t.title}
                              key={t.id}
                                id={t.id}/>
                )}
            </div>
            <div>
                {equipments.map(equipment =>
                    <Equipment id={equipment.id}
                               deleteEq={deleteEq}
                               title={equipment.title}
                               status={equipment.status}/>)}
                <br/>
                <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
                <input placeholder={'status'} value={status} onChange={(e) => setStatus(e.currentTarget.value)}/>
                <button onClick={add}> add </button>
            </div>
        </div>
    );
}


