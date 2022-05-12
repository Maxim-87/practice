import React from 'react';

type EquipmentType = {
    id:string,
    deleteEq: (id: string) => void
    title: string,
    status: string
}


export const Equipment = ({id, deleteEq, title, status}: EquipmentType) => {
    return (
        <div>
           {title} :
           {status}
            <input type="checkbox"/>
            <button onClick={() => deleteEq(id)}> delete </button>
            <button onClick={() => alert('change')}> change </button>
        </div>
    );
};

