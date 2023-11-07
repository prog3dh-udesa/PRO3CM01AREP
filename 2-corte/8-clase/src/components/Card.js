import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {
    console.log(props)
  return (
    <View>

        {/* Modo de uso si la imagen es local 
        source={require('../../assets/zapatos.jpg')}
        */}
        <Image
            style={styles.imgCard}
            source={
                {
                    uri: props.data.img
                }
            }
            resizeMode='contain'
        /> 
      <Text>{props.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imgCard:{
        height:150
    }
})