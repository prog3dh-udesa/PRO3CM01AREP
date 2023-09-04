import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPersonaje:null,
            esFavorito: false
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            dataPersonaje: data
        }, ()=> {

          let storageFav =  localStorage.getItem('favoritos')
          let arrParseado = JSON.parse(storageFav)
  
          if(arrParseado !== null){
            let estaMiPersonaje = arrParseado.includes(this.state.dataPersonaje.id)
  
            if(estaMiPersonaje){
              this.setState({
                esFavorito: true
              })
            }
          }

        }))
        .catch(err => console.log(err))


    }
    
    agregarAFavoritos(idPersonaje){
      let storageFav = localStorage.getItem('favoritos')
      if(storageFav === null){
        let arrIds = [idPersonaje]
        let arrStringificado = JSON.stringify(arrIds)
        localStorage.setItem('favoritos', arrStringificado)
      } else {
        let arrParseado = JSON.parse(storageFav)
        arrParseado.push(idPersonaje)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('favoritos', arrStringificado)
      }

      this.setState({
        esFavorito: true
      })
    }

    sacarDeFavoritos(idPersonaje){
      let storageFav = localStorage.getItem('favoritos')
      let arrParseado = JSON.parse(storageFav)
      let favsFiltrados = arrParseado.filter((id) => id !== idPersonaje)
      let arrStringificado = JSON.stringify(favsFiltrados)
      localStorage.setItem('favoritos', arrStringificado)
      this.setState({
        esFavorito: false
      })
    }


  render() {
    return (
      <>
      {
        this.state.dataPersonaje !== null ?
        <div>
            <img src={this.state.dataPersonaje.image} />
            <h1>{this.state.dataPersonaje.name}</h1>
            {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.state.dataPersonaje.id)}>
                Sacar de favoritos
              </button>  
              :
              <button onClick={()=> this.agregarAFavoritos(this.state.dataPersonaje.id)}>
                Agregar a favoritos
              </button>
            }
        </div>
        :
        <h1>Trayendo personajes</h1>
      }
      </>
    )
  }
}
