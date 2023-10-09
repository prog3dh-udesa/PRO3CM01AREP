import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { auth } from '../firebase/config';

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }        
    }

    registrarUsuario(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => console.log('ocurre correctamente'))
        .catch(e => console.log(e))
    }
  
    render() {
        return (
        <View>
            <Text>Formulario</Text>
            <TextInput
                placeholder='Escribi tu email'
                onChangeText={(text)=> this.setState({email: text})}
                // value={this.state.valorInput}
                keyboardType='email-address'
            />
            <TextInput
                placeholder='Indica tu contraseña'
                onChangeText={(text) => this.setState({password: text})}
                keyboardType='default'
                secureTextEntry={true}

            />
            <View>
                <TouchableOpacity
                    onPress={() => this.registrarUsuario(this.state.email, this.state.password)}
                >
                    <Text>Registrar mi usuario</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles =  StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'green',
        marginBottom: 16
    }
})