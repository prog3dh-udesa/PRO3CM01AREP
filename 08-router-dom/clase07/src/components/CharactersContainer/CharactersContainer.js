import React, {Component} from 'react'
import Character from '../Character/Character'
import MiForm from '../MiForm/MiForm'
import './styles.css'

class CharactersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      personajes: [],
      backup:[],
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
      personajes: data.results,
      backup: data.results
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

  filtrarPersonajes(nombre){
    let personajesFiltrados = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      personajes: personajesFiltrados,
    })
  }


  render(){
    return (
      <>
      <MiForm filtrarPersonajes={(nombre) => this.filtrarPersonajes(nombre)} />
      <div className='characters-container'>
        {
          this.state.personajes.length === 0 ?
          <h1>Trayendo personajes</h1> :
          this.state.personajes.map((personaje)=> <Character id={personaje.id} nombre={personaje.name} imagen={personaje.image} descripcion={personaje.status}   />)
        }
      </ div>
        <button onClick={()=> this.traerMasPersonajes()}>Traer mas personajes</button>
      </>
    )
  }
}

export default CharactersContainer
