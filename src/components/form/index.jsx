import React from 'react'
import { useState } from 'react'

import '../../styles/reset.css'
import '../../styles/globalStyles.css'
import './index.css'

export default function Form(prop) {

    return (
        <form onSubmit={ e => [e.preventDefault(), prop.callback({value: parseFloat(e.target.value.value), name: e.target.name.value, type: e.target.type.value}) ] }>
            <label htmlFor="">Descrição</label>
            <input required type="text" id='name' name='name' placeholder='Digite aqui sua descrição' />
            <span>Ex: Compra de roupas</span>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input required type="number" id="value" name="value" min="0.01" step='any' />
                </div>
                <div>
                    <label htmlFor="type">Tipo de valor</label>
                    <select name="type" id="type" required>
                        <option defaultValue value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button>Inserir valor</button>
        </form>
    )
}