import React, {Component} from 'react'
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

class CharactersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      personajes: [],
      page:1
    }
  }

  componentDidMount(){
    this.traerPersonajes()
  }

  traerPersonajes(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: data.results
    }))
    .catch(err => console.log(err))
  }
  
  traerMasPersonajes(){
    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page + 1}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: this.state.personajes.concat(data.results),
      page: this.state.page + 1
    }))
    .catch(err => console.log(err))

  }

  render(){
    return (
      <>
      <div className='characters-container'>
        {
          this.state.personajes.length === 0 ?
          <h1>Trayendo personajes</h1> :
          this.state.personajes.map((personaje)=> <Character nombre={personaje.name} imagen={personaje.image} descripcion={personaje.status}   />)
        }
      </ div>
        <button onClick={()=> this.traerMasPersonajes()}>Traer mas personajes</button>
      </>
    )
  }
}

export default CharactersContainer
