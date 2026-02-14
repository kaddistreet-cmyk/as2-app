import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla3Screen = ({ navigation }: Props) => {
  return (
    <View style={[stylesGlobal.container, { flex: 1 }]}>
      <Text style={stylesGlobal.title}>Ejercicio 3</Text>
      <View style={styles.container}>
        <Text style={styles.box1}>Caja</Text>
        <Text style={styles.box2}>Caja</Text>
        <Text style={styles.box3}>Caja</Text>
      </View>
      <Button title='Regresar'
        onPress={() => navigation.goBack()} />
      <Button title='Ir a pantalla 4'
        onPress={() => navigation.navigate('Pantalla4')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 400,
    backgroundColor: '#538D91',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap'
  },
  box1: {
    //flex: 1,
    borderWidth: 3,
    backgroundColor: 'red',
    borderColor: 'white',
    fontSize: 30
    //alignSelf: 'center'
  },
  box2: {
    borderWidth: 3,
    backgroundColor: 'blue',
    borderColor: 'white',
    fontSize: 30,
    //height: 600
  },
  box3: {
    borderWidth: 3,
    backgroundColor: 'red',
    borderColor: 'white',
    fontSize: 30,
    width: 800
  }
})