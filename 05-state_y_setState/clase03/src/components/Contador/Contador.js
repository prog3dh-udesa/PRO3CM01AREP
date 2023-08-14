import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: 0
        }
    }

    aumentar(){
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementar(){
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render() {
        return (
        <div>
            <h1>CONTADOR</h1>
            <h2>{this.state.valor}</h2>
            <button
            onClick={()=> this.aumentar()}
            >Aumentar</button>
            <button
            onClick={()=> this.decrementar()}
            >
                decrementar
            </button>
        </div>
        )
    }
}

export default Contador
