import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import FormLogin from '../components/FormLogin'
import { auth } from '../firebase/config'

export default class Login extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    auth.onAuthStateChanged(( user )=> {
      if(user !== null){
        this.props.navigation.navigate('TabNavigation')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLogin navigation={this.props.navigation} />
        <Text>
          ¿Aún no tienes una cuenta? 
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Register')}
          >Registrate aquí!</TouchableOpacity>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    }
})