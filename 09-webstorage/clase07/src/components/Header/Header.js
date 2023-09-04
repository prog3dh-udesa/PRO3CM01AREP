import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

let navegacion = [
  {
    nombre:'Home',
    ruta:'/',
  },
  {
    nombre:'About',
    ruta:'/about',
  },
  {
    nombre:'Personajes',
    ruta:'/personajes',
  },
  {
    nombre:'Favoritos',
    ruta: '/favoritos'
  }
]

export default function Header() {
  return (
    <nav>
        <ul className="main-nav">
            {
              navegacion.map((elm) => <li>
                <Link to={elm.ruta}>
                  {elm.nombre}
                </Link>
              </li> )
            }
        </ul>
        <ul className="user">
            <li>
                Nombre usuario <img src="./img/user.jpg" alt="" />
            </li>
        </ul>
    </nav>
  )
}
