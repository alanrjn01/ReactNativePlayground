import React from "react";
import {View, Image} from 'react-native'
import StyledTextWithTheme from "./StyledTextWithTheme";
import theme from "../theme";
import { Platform } from "react-native";



//el repository header esta comuesto de una fila con dos columnas, en una esta la imagen
// y en la otra columna esta el nombre, descripcion, etc
const RepositoryItemHeader = (props) => {
  return (
    <View style={{flexDirection:'row',paddingBottom:2}}>
        {/* el componente de Image pide el prop 'source' -> se le pasa un
         objeto con clave uri y la url de la imagen como valor */}
        {/* hay que estilar el componente image porque por si solo no sabe como renderizar la imagen */}
        <View style={{paddingRight:3}}>
          <Image style={styles.image} source={{uri:props.ownerAvatarUrl}}></Image>          
        </View>
        {/* con flex:1 repartimos el espacio en el contenedor para que no tenga overflow en la pantalla 
          ocupa y realiza los saltos de linea correspondientes
        */}
        
        <View style={{flex:1}}>
          <StyledTextWithTheme style={{color:'#586069'}} fontWeight='bold' fontSize='subheading' >{props.fullName}</StyledTextWithTheme>
          <StyledTextWithTheme style={{color:'#586069'}} fontSize='body'>{props.description}</StyledTextWithTheme>
          <StyledTextWithTheme style={styles.language} >Language: {props.language}</StyledTextWithTheme>
        </View>
    </View>
  )
}

export default RepositoryItemHeader

const styles = {
  language:{
    padding:3,
    color:theme.colors.white,
    backgroundColor: Platform.select({
      android:theme.colors.primary,
      ios:'green',
      web:'yellow'
    }),
    //mueve el elemento al principio de todo y solo ocupa el espacio que requiere
    alignSelf:'flex-start',
    borderRadius: 5,
    marginTop:4,
    marginBottom:4,
    overflow:'hidden',
  },
  image:{
    width:48,
    height:48,
    borderRadius:4
  }
}