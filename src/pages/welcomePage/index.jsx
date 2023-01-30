import React from 'react'
import illustration from '../../assets/img/Illustration.svg'
import NuKenzieWhite from '../../assets/img/NuKenzieWhite.svg'

import './index.css'

export default function WelcomePage({nav}){
    return (
        <main className='welcomePage'>
            <div className="leftContainer">
                <h1><img src={NuKenzieWhite} alt="" /></h1> 
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={function(){ nav(true) }} >Iniciar</button>
            </div>
            <div className="rightContainer">
                <img src={illustration} alt="" />
            </div>
        </main>
    )
}