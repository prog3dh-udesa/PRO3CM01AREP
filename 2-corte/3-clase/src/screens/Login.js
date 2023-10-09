import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FormLogin from '../components/FormLogin'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLogin />
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