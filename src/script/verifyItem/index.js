import React from 'react'

export default function verifyIfEmpty(list) {
    if(list && typeof(list) === "object" && list !== null ? list.length > 0 : false){
        return true
    } else{
        return false
    }
}