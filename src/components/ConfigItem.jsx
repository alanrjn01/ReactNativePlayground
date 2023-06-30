import React from 'react'
import {FlatList, StyleSheet, Text,View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Settings = (props) => {
  return(
    <View style={styles.container} key={props.id}>
      <MaterialCommunityIcons name={props.icon} color={'black'} size={42}/>
      <View>
        <Text style={styles.text}>{props.configName}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#fafafa',
    padding:12,
    borderRadius:30,
    marginHorizontal:20
  },
  icon:{
  },
  text:{
    color:'#586069',
    fontSize:24,
    textAlign:'left',
    marginLeft:8,
    textAlignVertical:'top'
  },
  description:{
    color:'#586069',
    marginLeft:8
  }
})

export default Settings