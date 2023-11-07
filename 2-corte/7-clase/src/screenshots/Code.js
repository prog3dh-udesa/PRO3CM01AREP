import react, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

const unArray = ['Hola', 'Mundo']

export default class Receta extends Component {
    constructor(props){
        super(props)
    }

    redirigirAlPerfil(id){
        //Aqui se añadira la opción que selecciones
    }

    render(){
        return(   
        <TouchableOpacity
            onPress={()=> this.redirigirAlPerfil(this.props.id)}
        >
            <Text>Ver perfil</Text>
        </TouchableOpacity>
        )
    }

}