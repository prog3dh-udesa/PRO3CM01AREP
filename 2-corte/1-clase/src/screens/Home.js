import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Contador from '../components/Contador'

export default class Home extends Component {
  
saludar(){
    console.log('Hola, bienvenidas y bienvenidos a Native')
}

saludoInformal(){
    console.log('Los gestionamos por separadas')
}
render() {
    return (
      <View style={styles.container} >
        <Text>Home</Text>
        <TouchableOpacity

        onPress={()=> this.saludar()}
        onLongPress={()=> this.saludoInformal()}
        
        >
            <Text>Hola mundo</Text>
        </TouchableOpacity>

        <Contador />
      </View>
    )
  }
}

const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
    
        }
    }
) 