import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import FormDescripcionPost from '../components/FormDescripcionPost'
export default class NewPost extends Component {


  onSubmit({
    descripcion
  }){
    db.collection('posts').add(
      {
        owner: auth.currentUser.email,
        createdAt:Date.now(),
        descripcion:descripcion,
        likes:[]
      }
    )
    .catch((e) => console.log(e))

  }
  render() {
    return (
      <View>
        <Text>NewPost</Text>
        <FormDescripcionPost
        onSubmit={(obj)=> this.onSubmit(obj)}
        />
      </View>
    )
  }
}