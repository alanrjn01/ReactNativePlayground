import React from "react";
import {View, Text, FlatList, Image, ScrollView, SafeAreaView, StyleSheet, TouchableHighlight} from 'react-native'
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";
import CatButtonAlert from "../helpers/CatButtonAlert";


//este componente se encarga de listar los elementos del array repositories
//para ello uso un FlatList al cual le paso los siguientes parametros:
// data -> array sobre el cual va a iterar para listar
// itemSeparatorComponent -> el separador para cada iteración
// renderItem -> sobre qué item va a renderizar y qué... adentro tiene 
// el componente RepositoryItem que se le pasa los items del elemento para que los renderice
const RepositoryList = () => {
  return (
    <ScrollView >
    <SafeAreaView>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={()=><Text></Text>}
        renderItem={({item:repo})=> (
          <RepositoryItem {...repo}></RepositoryItem>
        )}
        >
      </FlatList>  
    </SafeAreaView>
    <View style={styles.catContainer}>
      <TouchableHighlight onPress={CatButtonAlert}>
        <Image  style={{width:200,height:200}} source={{uri:'https://i.imgur.com/uqBU65t.png'}}></Image>
      </TouchableHighlight>
    </View>
    </ScrollView>   
  )
}

export default RepositoryList

const styles = StyleSheet.create({
  catContainer:{
    marginVertical:30,
    flexDirection:'row',
    justifyContent:'center'
  }
})
