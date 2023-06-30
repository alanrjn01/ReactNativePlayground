import React, { Children } from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

//me traigo los valores definidos en el archivo 'theme.js'
// y los asigno a cada valor
const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

//evalua las props y si las hay, activa ese estilo
export default function StyledText({children,color,fontSize,fontWeight,textAlign,style, ...restOfProps}){
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    textAlign === 'textAlignCenter' && styles.textAlignCenter,
    style
    // 'prop' === 'valor' && item del styleSheet 'styles'
  ]
  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}