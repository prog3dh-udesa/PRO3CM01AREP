import React from 'react'
import Character from '../Character/Character'
import './styles.css'
let heroes = [
    {
        nombre:'Ahsoka',
        descripcion:'Lorem ipsum',
        imagen:'./img/characters/ahsoka.jpg'
    },
    {
        nombre:'Anakin',
        descripcion:'Lorem ipsum',
        imagen:'./img/characters/anakin.jpg'
    },
    {
        nombre:'Batman',
        descripcion:'Lorem ipsum',
        imagen:'./img/characters/batman.jpg'
    }
]

function CharactersContainer() {
  return (
    <div className='characters-container'>
    {heroes.map((heroe)=> <Character nombre={heroe.nombre} imagen={heroe.imagen} descripcion={heroe.descripcion}   />)}
    </ div>
  )
}

export default CharactersContainer
