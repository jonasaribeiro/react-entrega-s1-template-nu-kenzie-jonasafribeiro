import React from 'react'

export default function insertItem(newItemObj) {
    let temp = localStorage.getItem("@NuKenzie")
    let data = temp ? JSON.parse(temp) : []
    data.push(newItemObj)
    localStorage.setItem("@NuKenzie", JSON.stringify(data))
}