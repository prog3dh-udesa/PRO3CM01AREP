import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import Contador from '../components/Contador'
import Card from '../components/Card'

let arrZapas = [
    {
        name: 'Cortez',
        img:'https://static.nike.com/a/images/t_default/9ab8e739-b9e7-4ce9-b071-cb7db0535b99/cortez-txt-zapatillas-d9wGMS.png'
    },
    {
        name: 'Air Force 1',
        img:'https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA2NSx3XzE4OTMseF81MSx5XzY2Mg==/jczrzgiymddftgcdheiu/nike-air-force-1-low-terror-squad-fj5756-100-pair.jpg'
    },
    {
        name: 'Dunk',
        img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8460b67-10d2-4c07-8307-95aa986e8287/dunk-low-zapatillas.png'
    },
    {
        name: 'Cortez',
        img:'https://static.nike.com/a/images/t_default/9ab8e739-b9e7-4ce9-b071-cb7db0535b99/cortez-txt-zapatillas-d9wGMS.png'
    },
    {
        name: 'Air Force 1',
        img:'https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA2NSx3XzE4OTMseF81MSx5XzY2Mg==/jczrzgiymddftgcdheiu/nike-air-force-1-low-terror-squad-fj5756-100-pair.jpg'
    },
    {
        name: 'Dunk',
        img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8460b67-10d2-4c07-8307-95aa986e8287/dunk-low-zapatillas.png'
    },
    {
        name: 'Cortez',
        img:'https://static.nike.com/a/images/t_default/9ab8e739-b9e7-4ce9-b071-cb7db0535b99/cortez-txt-zapatillas-d9wGMS.png'
    },
    {
        name: 'Air Force 1',
        img:'https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA2NSx3XzE4OTMseF81MSx5XzY2Mg==/jczrzgiymddftgcdheiu/nike-air-force-1-low-terror-squad-fj5756-100-pair.jpg'
    },
    {
        name: 'Dunk',
        img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8460b67-10d2-4c07-8307-95aa986e8287/dunk-low-zapatillas.png'
    }
]

export default class Home extends Component {
  
saludar(){
    console.log('Hola, bienvenidas y bienvenidos a Native')
}

saludoInformal(){
    console.log('Los gestionamos por separadas')
}
render() {
    return (
        <View>
            <View style={styles.containerGral}>
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
                <FlatList
                    data={arrZapas}
                    keyExtractor = {(item) => item.name.toString() }
                    renderItem={({item}) => <Card data={item} />}
                />

                <ActivityIndicator
                    size={32}
                    color={'blue'}
                />
                
            </View>
            <View style={styles.containerGral}>
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
                {/* <FlatList
                    data={arrZapas}
                    keyExtractor = {(item) => item.name.toString() }
                    renderItem={({item}) => <Card data={item} />}
                /> */}

                <ActivityIndicator
                    size={32}
                    color={'blue'}
                />
                
            </View>
            <View style={styles.containerGral}>
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
                {/* <FlatList
                    data={arrZapas}
                    keyExtractor = {(item) => item.name.toString() }
                    renderItem={({item}) => <Card data={item} />}
                /> */}

                <ActivityIndicator
                    size={32}
                    color={'blue'}
                />
                
            </View>
            <View style={styles.containerGral}>
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
                {/* <FlatList
                    data={arrZapas}
                    keyExtractor = {(item) => item.name.toString() }
                    renderItem={({item}) => <Card data={item} />}
                /> */}

                <ActivityIndicator
                    size={32}
                    color={'blue'}
                />
                
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create(
    {
        containerGral:{
            flex:1
        },
        container : {
            flex : 2,
            alignContent:'centrer'
    
        },
        containerGrande:{
            flex:3,
            backgroundColor:'blue'
        },
        containerChico:{
            flex:1,
            backgroundColor:'orange'
        }
    }
) 