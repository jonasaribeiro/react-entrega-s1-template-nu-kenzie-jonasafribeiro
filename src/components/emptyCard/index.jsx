import React from 'react'
import './index.css'

export default function EmptyCard(){
    return (
        <>
            <li className='emptyLi'>
                <div className='grayBox1'></div>
                <div className="grayBox2"></div>
            </li>
            <li className='emptyLi'>
                <div className='grayBox1'></div>
                <div className="grayBox2"></div>
            </li>
            <li className='emptyLi'>
                <div className='grayBox1'></div>
                <div className="grayBox2"></div>
            </li>
        </>
    )
}