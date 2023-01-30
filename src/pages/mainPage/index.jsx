import React from 'react'
import Header from '../../components/header'
import Form from '../../components/form'
import TotalMoney from '../../components/totalMoney'
import ListItem from '../../components/itemLista'
import EmptyCard from '../../components/emptyCard'
import { useState } from 'react'

import '../../styles/reset.css'
import '../../styles/globalStyles.css'
import "./index.css"

export default function MainPage(prop) {
    const [ list, setList ] = useState( JSON.parse(localStorage.getItem("@NuKenzie")) )

    return (
        <>
            <main>
                <div className='form__Container'>
                    <Form callback={setList} list={list} />
                    { verifyIfEmpty(list) ? <TotalMoney totalValue={ list.reduce( (soma, item) => item.type === "Entrada" ? item.value + soma : soma - item.value, 0 ) } /> : <></>}
                    
                </div>
                <div className='list__Container'>
                    <h2>Resumo Financeiro</h2>

                    { verifyIfEmpty(list) ? <></> : <h2 className='title2'>Você ainda não possui nenhum lançamento</h2> }
                    <ul>
                        { verifyIfEmpty(list) ? list.map((item, index) => { return <ListItem name={item.name} value={item.value} type={item.type} key={index} callback={setList} list={list} /> }) : <EmptyCard/> }
                    </ul>
                </div>
            </main>
            
            <Header nav={ prop } />
        </>
    )
}

function verifyIfEmpty(list) {
    if(list && (typeof(list === "object") ? list.length > 0 : false)){
        return true
    } else{
        return false
    }
}