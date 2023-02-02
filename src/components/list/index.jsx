import React from 'react'
import ListItem from '../../components/itemLista'
import EmptyCard from '../../components/emptyCard'
import verifyIfEmpty from '../../script/index'

export default function List(prop){
    console.log(prop)
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

// function verifyIfEmpty(list) {
//     if(list && (typeof(list === "object") ? list.length > 0 : false)){
//         return true
//     } else{
//         return false
//     }
// }