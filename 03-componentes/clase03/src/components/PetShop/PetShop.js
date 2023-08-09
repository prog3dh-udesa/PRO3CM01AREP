import React from 'react'
import Mascota from '../Mascota/Mascota'

export default function PetShop() {
  return (
    <div>
        <h1>Bienvenidos a la PetShop Copada</h1>            
        <Mascota tipo='Perro' sonido='Guau guau' />
        <Mascota tipo='Gato' sonido='Miau miau'/>
        <Mascota tipo='Pollito' sonido='Pio pio'/>
    </div>
  )
}
