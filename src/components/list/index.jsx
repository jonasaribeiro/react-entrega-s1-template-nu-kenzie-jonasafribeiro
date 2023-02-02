import React from 'react'
import ListItem from '../../components/itemLista'
import EmptyCard from '../../components/emptyCard'
import verifyIfEmpty from '../../script/verifyItem/index'

export default function List(prop){
    return(
        <div className='list__Container'>
            <h2>Resumo Financeiro</h2>

            { verifyIfEmpty(prop.list) ? <></> : <h2 className='title2'>Você ainda não possui nenhum lançamento</h2> }
            <ul>
                { verifyIfEmpty(prop.list) ? prop.list.map((item, index) => { return <ListItem name={item.name} value={item.value} type={item.type} key={index} callback={prop.setList} list={prop.list} /> }) : <EmptyCard/> }
            </ul>
        </div>
    )
}