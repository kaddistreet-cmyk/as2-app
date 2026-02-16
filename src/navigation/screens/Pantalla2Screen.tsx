import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla2Screen = ({ navigation }: Props) => {
  return (
    <Image
      source={require('../../assets/store.png')}
      style={stylesGlobal.logo}
      resizeMode="cover"
    />
  )
}
