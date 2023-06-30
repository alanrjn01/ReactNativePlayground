import React, { Children } from 'react'
import {Text, StyleSheet} from 'react-native'

//esto es un componente reutilizable al que le podemos pasar
//distintas props declaradas en 'styles' de forma
//dinamica y asi reutilizar el mismo componente de texto
//y aplicarle los estilos ya predefinidos 

const styles = StyleSheet.create({
  text:{
    fontSize:12,
    color:'grey'
  },
  bold:{
    fontWeight:'bold'
  },
  blue:{
    color:'blue'
  },
  big:{
    fontSize:20
  },
  small:{
    fontSize:10
  }
})

//evalua las props y si las hay, activa ese estilo
export default function StyledText({children,bold,blue,big,small}){
  const textStyles = [
    styles.text,
    blue && styles.blue,
    big && styles.big,
    small && styles.small,
    bold && styles.bold
  ]
  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}