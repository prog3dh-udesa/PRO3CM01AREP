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
    let storage = localStorage.getItem('favoritos')
    if(storage !== null) {
      let arrParseado = JSON.parse(storage)
      Promise.all(
        arrParseado.map(id => 
          fetch('https://rickandmortyapi.com/api/character/'+id)
          .then(resp => resp.json())
        )
      )
      .then(data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
  }

  actualizarFavoritos(idASacar){
    // if(arrFavs.length > 0){
    //   Promise.all(
    //     arrFavs.map(id => 
    //       fetch('https://rickandmortyapi.com/api/character/'+id)
    //       .then(resp => resp.json())
    //     )
    //   )
    //   .then(data => this.setState({favoritos: data}))
    //   .catch(err => console.log(err))
    // } else {
    //   this.setState({favoritos: []})
    // }
    let stateFiltrado = this.state.favoritos.filter((personaje) => personaje.id !== idASacar)
    this.setState({favoritos: stateFiltrado})
  }


  render() {
    return (
      <div>
        <h1>Aqui van a ir los Favoritos</h1>
        <CharactersContainer actualizarFavoritos={(idASacar) => this.actualizarFavoritos(idASacar)} personajes={this.state.favoritos} />
      </div>
    )
  }
}

export default index