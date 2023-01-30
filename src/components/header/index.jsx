import React from 'react'
import Img from '../../assets/img/NuKenzie.svg'

import '../../styles/reset.css'
import '../../styles/globalStyles.css'
import "./index.css"

export default function Header() {
    return (
        <header>
            <h1><img src={Img} alt="" /></h1>
            <button>Início</button>
        </header>
    )
}