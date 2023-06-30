import React from "react";
import {View,Text} from 'react-native'
import StyledTextWithTheme from "./StyledTextWithTheme";


//funcion para parsear miles para q se muestre un digito y la K
const parseThousands = value => {
  return value >= 1000 ? `${Math.round(value/100)/10}k` : String(value)
}


//este componente muestra: stars, forks, review y rating, esta organizado el contenedor padre
// con flex direction row, y las vistas en columnas
const RepositoryStats = (props) => {
  return (
    <View style={{flexDirection:'row',gap:30,justifyContent:'center'}}>
      <View>
        <StyledTextWithTheme color='secondary' fontWeight='bold'>STARS</StyledTextWithTheme>
        <StyledTextWithTheme color='secondary' textAlign='textAlignCenter'>{parseThousands(props.stargazersCount)}</StyledTextWithTheme>
      </View>
      <View>
        <StyledTextWithTheme color='secondary' fontWeight='bold'>FORKS:</StyledTextWithTheme>
        <StyledTextWithTheme color='secondary' textAlign='textAlignCenter'>{parseThousands(props.forksCount)}</StyledTextWithTheme>
      </View>
      <View>
        <StyledTextWithTheme color='secondary' fontWeight='bold'>REVIEW:</StyledTextWithTheme>
        <StyledTextWithTheme color='secondary' textAlign='textAlignCenter'>{props.reviewCount}</StyledTextWithTheme>
      </View>
      <View>
        <StyledTextWithTheme color='secondary' fontWeight='bold'>RATING:</StyledTextWithTheme>
        <StyledTextWithTheme color='secondary' textAlign='textAlignCenter'>{props.ratingAverage}</StyledTextWithTheme>
      </View>
    </View>
  )
}

export default RepositoryStats