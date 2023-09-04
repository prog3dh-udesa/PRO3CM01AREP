import React, { Component } from 'react'
import CharactersContainer from '../../components/CharactersContainer/CharactersContainer'
import MiForm from '../../components/MiForm/MiForm'

export default class index extends Component {
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

  render() {
    return (
    <div>
      <MiForm filtrarPersonajes={(nombre) => this.filtrarPersonajes(nombre)} />
        <CharactersContainer personajes={this.state.personajes} />
        <button onClick={()=> this.traerMasPersonajes()}>Traer mas personajes</button>
    </div>
    )
  }
}
