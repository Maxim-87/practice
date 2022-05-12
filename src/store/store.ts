import {applyMiddleware, combineReducers, createStore} from "redux";
import {equipmentsReducer} from "./countReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {todolistReducer} from "./todolistReducer";


const rootReducer = combineReducers({
    equipments: equipmentsReducer,
    todolists: todolistReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store