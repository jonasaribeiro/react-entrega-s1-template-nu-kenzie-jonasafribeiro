import React from 'react'
import TrashCan from '../../assets/img/trash.svg'

import './index.css'

export default function ListItem(prop) {
    return (
        <li key={prop.id} className={prop.type === "Entrada" ? "liEntrada" : "liDespesa"}>
            <div className='nameDiv'>
                <h3>{prop.name}</h3>
                <p>{prop.type}</p>
            </div>
            <div className='valueDiv'>
                <span>{'R$ ' + prop.value.toFixed(2)}</span>
                <button onClick={ e => removeHandler(prop) } ><img src={TrashCan} alt="X" /></button>
            </div>
        </li>
    )
}

function removeHandler(prop){
    prop.callback( current => current.filter( element => (element.name !== prop.name || element.type !== prop.type || element.value !== prop.value)  ) );
    let data = JSON.parse(localStorage.getItem("@NuKenzie"));
    console.log(data)
    localStorage.setItem("@NuKenzie", JSON.stringify(data.filter(element => (element.name !== prop.name || element.type !== prop.type || element.value !== prop.value))))
    console.log(data)

}