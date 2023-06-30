import React from 'react'
import {FlatList, StyleSheet, Text,View} from 'react-native'
import configs from '../data/configs'
import ConfigItem from './ConfigItem'

const Settings = () => {
  return(
    <View>
      <Text style={styles.text}>Configuraciones</Text>
      <FlatList
      data={configs}
      ItemSeparatorComponent={()=><Text></Text>}
      renderItem={({item:conf})=>(
        <ConfigItem {...conf}></ConfigItem>
      )}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:30,
    textAlign:'center',
    textAlignVertical:'center',
    color:'#586069',
    paddingVertical:10
    
  }
})

export default Settings