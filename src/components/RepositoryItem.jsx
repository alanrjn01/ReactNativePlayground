import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import StyledTextWithTheme from "./StyledTextWithTheme";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import RepositoryItemHeader from './RepositoryItemHeader'



const RepositoryItem = (props) => {
  return (
      <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}></RepositoryItemHeader>
        <RepositoryStats {...props}></RepositoryStats>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingBottom:8,
    paddingTop:8,
    backgroundColor:'#fafafa'
  },
})

export default RepositoryItem