import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    return (
      <div>Aqui voy a presentar el personaje:{this.props.match.params.id}</div>
    )
  }
}
