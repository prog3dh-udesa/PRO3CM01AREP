import React from 'react'
import './styles.css'

export default function Mascota(props) {
  return (
    <div className='mascota'>
        <div>{props.tipo}</div>
        <p>{props.sonido}</p>
    </div>

  )
}
