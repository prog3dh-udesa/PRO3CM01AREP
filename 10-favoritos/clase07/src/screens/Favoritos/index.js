import React, { Component } from 'react'
import CharactersContainer from '../../components/CharactersContainer/CharactersContainer'
class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      favoritos: []
    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('favoritos')

    if(storageFavs !== null){
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map( id => 
            fetch('https://rickandmortyapi.com/api/character/' + id)
            .then( resp => resp.json())
          )
      )
      .then( data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
  }

  actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }

  render() {
    return (
      <div>
        <h1>Aqui van a ir los Favoritos</h1>
        <CharactersContainer actualizarState ={(id)=> this.actualizarState(id)} personajes={this.state.favoritos} />
      </div>
    )
  }
}

export default index