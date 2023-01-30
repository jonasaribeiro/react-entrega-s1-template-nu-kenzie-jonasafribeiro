import React from 'react'
import Header from '../../components/header'
import Form from '../../components/form'
import TotalMoney from '../../components/totalMoney'
import ListItem from '../../components/itemLista'
import EmptyCard from '../../components/emptyCard'

import '../../styles/reset.css'
import '../../styles/globalStyles.css'
import "./index.css"

export default function mainPage() {
    let temp = localStorage.getItem("@NuKenzie")
    let dataBase = temp || temp !== "" ? JSON.parse(temp) : false

    console.log(dataBase)

    return (
        <>
            <main>
                <div className='form__Container'>
                    <Form callback={insertItem} />
                    { dataBase ? <TotalMoney totalValue={ dataBase.reduce( (soma, item) => item.type === "Entrada" ? item.value + soma : soma - item.value, 0 ) } /> : <></>}
                    
                </div>
                <div className='list__Container'>
                    <h2>Resumo Financeiro</h2>

                    { dataBase ? <></> : <h2 className='title2'>Você ainda não possui nenhum lançamento</h2> }
                    <ul>
                        { dataBase ? dataBase.map((item, index) => { return <ListItem name={item.name} value={item.value} type={item.type} key={index} /> }) : <EmptyCard/> }
                    </ul>
                </div>
            </main>
            
            <Header />
        </>
    )
}

export function insertItem(newItemObj) {
    let temp = localStorage.getItem("@NuKenzie")
    let data = temp ? JSON.parse(temp) : []
    data.push(newItemObj)
    localStorage.setItem("@NuKenzie", JSON.stringify(data))
}