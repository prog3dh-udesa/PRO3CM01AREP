import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import FormDescripcionPost from '../components/FormDescripcionPost'
import CamaraPost from '../components/CamaraPost'

export default class NewPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      descripcion:'',
      urlFoto:'',
      paso1:true
    }
  }


  onSubmit({
    descripcion,
    fotoUrl
  }){
    db.collection('posts').add(
      {
        owner: auth.currentUser.email,
        createdAt:Date.now(),
        fotoUrl:fotoUrl,
        descripcion:descripcion,
        likes:[]
      }
    )
    .then(()=> this.props.navigation.navigate('Home'))
    .catch((e) => console.log(e))

  }

  actualizarDescripcion(text){
    this.setState({
      descripcion: text
    })
  }

  actualizarFotourl(url){
    this.setState({
      urlFoto: url,
      paso1: false
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>NewPost</Text>
        {
          this.state.paso1 ?
            <CamaraPost
              actualizarFotourl= {(url)=> this.actualizarFotourl(url)}
            />
          :
          <>
            <FormDescripcionPost
            // onSubmit={(obj)=> this.onSubmit(obj)}
            actualizarDescripcion={(descripcion)=> this.actualizarDescripcion(descripcion)}
            estadoDescripcion = {this.state.descripcion}
            />
            <TouchableOpacity
              onPress={()=> this.onSubmit({
                  descripcion: this.state.descripcion,
                  fotoUrl: this.state.urlFoto
              })}
            >
                <Text>
                    Enviar
                </Text>
            </TouchableOpacity>
          </>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})