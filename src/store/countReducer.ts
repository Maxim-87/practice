import {equipmentType} from "../App";

const ADD_EQUIPMENT = 'ADD_EQUIPMENT';
const DELETE_EQUIPMENT = 'DELETE_EQUIPMENT';


const initialState: Array<equipmentType> = []

export const equipmentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_EQUIPMENT':
            const newEquipment = {...action.payload}
            return [...state, newEquipment]

        case 'DELETE_EQUIPMENT':
            return [...action.payload]

        default:
            return state
    }
}

export const addEquipment = (equipment: equipmentType) => ({type: "ADD_EQUIPMENT", payload: equipment})
export const deleteEquipment = (equipment: Array<equipmentType>) => ({type: "DELETE_EQUIPMENT", payload: equipment})