import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: 0
        }
        // console.log('Soy el constructor')
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
    componentDidMount(){
        // console.log('Soy el didMount')
    }

    componentDidUpdate(){
        // console.log('Soy el didUpdate')
    }
    componentWillUnmount(){
        // alert('Soy el willUnmount')
    }

    render() {
        // console.log('Soy el Render')
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
            <a href='https://google.com'>Vamos a googlearlo</a>
        </div>
        )
    }
}

export default Contador
