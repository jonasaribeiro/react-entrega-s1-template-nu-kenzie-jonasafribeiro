import React from 'react'
import Header from '../../components/header'
import Form from '../../components/form'
import List from '../../components/list'
import TotalMoney from '../../components/totalMoney'
import { useState } from 'react'

import '../../styles/reset.css'
import '../../styles/globalStyles.css'
import "./index.css"

export default function MainPage(prop) {

    const [ list, setList ] = useState( localStorage.getItem("@NuKenzie") ? JSON.parse(localStorage.getItem("@NuKenzie")) : [] ) 


    return (
        <>
            <main>
                <div className='form__Container'>
                    <Form callback={setList} list={list} />
                    <TotalMoney list={list} callback={setList} />
                </div>
                <List list={list} setList={setList} />
            </main>
            <Header nav={ prop } />
        </>
    )
}