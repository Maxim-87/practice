import React from 'react';
import {TodolistType} from "../App";



export const Todolist = ({id, title}: TodolistType) => {
    return (
        <div>
           <h3>{title}</h3> , {id}
        </div>
    );
};

export default Todolist;