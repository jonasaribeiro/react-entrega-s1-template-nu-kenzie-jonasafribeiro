import React from 'react'
import './index.css'
import verifyIfEmpty from '../../script/index'

export default function TotalMoney(prop) {
    console.log(typeof(prop.list), prop.list.length)
    if(verifyIfEmpty(prop.list)){
        return (
            <div className='totalMoney__Container'>
                <div>
                    <h2>Valor total:</h2>
                    <span className='totalValue'> { (prop.totalValue > 0 ?  "R$ " : "- R$ ") + prop.totalValue.toFixed(2) } </span>
                </div>
                <p>O valor se refere ao saldo</p>
            </div>
        )
    } else { return ( <></> ) }
}