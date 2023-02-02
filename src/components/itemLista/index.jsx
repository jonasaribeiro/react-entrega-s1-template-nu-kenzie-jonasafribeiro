import React from 'react'
import TrashCan from '../../assets/img/trash.svg'
import { removeHandler } from '../../script/removeHandler'

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