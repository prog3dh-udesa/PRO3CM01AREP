import React, {Component} from 'react'
import Character from '../Character/Character'
import './styles.css'

class CharactersContainer extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <>
      <div className='characters-container'>
        {
          this.props.personajes.length === 0 ?
          <h1>Trayendo personajes</h1> :
          this.props.personajes.map((personaje)=> 
          <Character 
            id={personaje.id} 
            nombre={personaje.name} 
            imagen={personaje.image} 
            descripcion={personaje.status}
            actualizarState={this.props.actualizarState ? (id) =>  this.props.actualizarState(id) : false}
          />)
        }
      </ div>
      </>
    )
  }
}

export default CharactersContainer
