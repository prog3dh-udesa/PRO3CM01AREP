import { Component } from "react"

class Character extends Component{
    constructor(props){
        super(props)
    }

    saludar(nombreHeroe){
        alert('Hola mi nombre es ' + nombreHeroe)
    }

    render(){
        return(
        <div onClick={(nombreHeroe)=> this.saludar(this.props.nombre)} className="character-card">
              <img src={this.props.imagen} alt={this.props.nombre} />
              <h4>{this.props.nombre}</h4>
              <p>{this.props.descripcion}</p>
              <a href="#">Ver más</a>
          </div>
        )
    }
}

export default Character