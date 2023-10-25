import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { auth, db } from '../firebase/config'

class FormRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            mail: '',
            password: '',
            minibio:''
        }
    }

    registrarUsuario(name, email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(user => db.collection('users').add({
                owner: this.state.mail,
                createdAt: Date.now(),
                name: this.state.name,
                minibio: this.state.minibio
            })
        )
        .then((resp) => console.log(resp))
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
                    placeholder='Crea una minibio'
                    value={this.state.minibio}
                    onChangeText={(text) => this.setState({minibio:text})}
                />
                <TextInput
                    style = {styles.input}
                    placeholder = 'Dinos tu password'
                    keyboardType = 'default'
                    value = {this.state.password}
                    secureTextEntry={true}
                    onChangeText = { (text) => this.setState({password: text}) }
                />

                <Text
                    style={styles.textLink}
                >
                    ¿Tienes una cuenta?
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Login')}
                    >
                        Logueate aquí!
                    </TouchableOpacity>
                </Text>


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
    },
    textLink:{
        marginBottom:24
    }
})

export default FormRegister