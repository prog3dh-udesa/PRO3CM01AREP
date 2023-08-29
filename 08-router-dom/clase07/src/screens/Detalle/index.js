import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPersonaje:null
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            dataPersonaje: data
        }))
        .catch(err => console.log(err))
    }


  render() {
    console.log(this.props)
    return (
      <>
      {
        this.state.dataPersonaje !== null ?
        <div>
            <img src={this.state.dataPersonaje.image} />
            <h1>{this.state.dataPersonaje.name}</h1>
        </div>
        :
        <h1>Trayendo personajes</h1>
      }
      </>
    )
  }
}
