import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../firebase/config'

class FormRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            mail: '',
            password: ''
        }
    }

    registrarUsuario(name, email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch( err => console.log(err))
    }

    render() {
        return (
        <View>
            <Text>Registrate a mi app</Text>
            <View>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Dinos tu nombre'
                    keyboardType = 'default'
                    value = {this.state.name}
                    onChangeText = { (text) => this.setState({name: text}) }
                />

                <TextInput
                    style = {styles.input}
                    placeholder = 'Dinos tu email'
                    keyboardType = 'email-address'
                    value = {this.state.mail}
                    onChangeText = { (text) => this.setState({mail: text}) }
                />

                <TextInput
                    style = {styles.input}
                    placeholder = 'Dinos tu password'
                    keyboardType = 'default'
                    value = {this.state.password}
                    secureTextEntry={true}
                    onChangeText = { (text) => this.setState({password: text}) }
                />
                <TouchableOpacity 
                onPress={()=> this.registrarUsuario(this.state.name, this.state.mail, this.state.password)}                
                style={styles.btn}>
                    <Text style={styles.textBtn}>Registrame ahora!!</Text>
                </TouchableOpacity>

            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 24
    },
    btn:{
        backgroundColor:'purple',
        padding:16
    },
    textBtn:{
        color:'white'
    }
})

export default FormRegister