import React from 'react'
import './index.css'
import verifyIfEmpty from '../../script/verifyItem/index'

export default function TotalMoney(prop) {
    if(verifyIfEmpty(prop.list)){

        console.log(verifyIfEmpty(prop.list), prop)

        let totalValue = prop.list.reduce( (soma, item) => item.type === "Entrada" ? item.value + soma : soma - item.value, 0 )

        return (
            <div className='totalMoney__Container'>
                <div>
                    <h2>Valor total:</h2>
                    <span className='totalValue'> { (totalValue >= 0 ?  "R$ " : "- R$ ") + totalValue.toFixed(2) } </span>
                </div>
                <p>O valor se refere ao saldo</p>
            </div>
        )

    } else { return ( <></> ) }
}