import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla5Screen = ({ navigation }: Props) => {
  return (
    <View style={[stylesGlobal.container, { flex: 1 }]}>
      <Text style={stylesGlobal.title}>Ejercicio 5</Text>
      <View style={styles.container}>
        <Text style={styles.box1}>Caja</Text>
        <Text style={styles.box2}>Caja</Text>
        <Text style={styles.box3}>Caja</Text>
      </View>
      <Button title='Regresar'
        onPress={() => navigation.goBack()} />
      <Button title='Ir a pantalla 6'
        onPress={() => navigation.navigate('Pantalla6')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 400,
    backgroundColor: '#538D91',
    position: 'relative',
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'flex-start',
    flexWrap: 'nowrap'
  },
  box1: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  box2: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '45%',
    left: '45%',
  },
  box3: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})