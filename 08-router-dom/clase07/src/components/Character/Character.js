import { Component } from "react"
import { Link } from "react-router-dom"

class Character extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="character-card">
              <Link to={`/personaje/id/${this.props.id}`}>
                <img src={this.props.imagen} alt={this.props.nombre} />
              </Link>
              <h4>{this.props.nombre}</h4>
              <p>{this.props.descripcion}</p>
              <a href="#">Ver más</a>
          </div>
        )
    }
}

export default Character