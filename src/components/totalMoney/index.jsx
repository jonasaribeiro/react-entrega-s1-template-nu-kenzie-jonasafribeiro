import React from 'react'

import './index.css'

export default function TotalMoney(prop) {
    return (
        <div className='totalMoney__Container'>
            <div>
                <h2>Valor total:</h2>
                <span className='totalValue'> { (prop.totalValue > 0 ?  "R$ " : "- R$ ") + prop.totalValue.toFixed(2) } </span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}