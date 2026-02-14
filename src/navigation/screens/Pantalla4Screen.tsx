import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla4Screen = ({ navigation }: Props) => {
  return (
    <View style={[stylesGlobal.container, { flex: 1 }]}>
      <Text style={stylesGlobal.title}>Ejercicio 4</Text>
      <View style={styles.container}>
        <Text style={styles.box1}>Caja</Text>
        <Text style={styles.box2}>Caja</Text>
        <Text style={styles.box3}>Caja</Text>
      </View>
      <Button title='Regresar'
        onPress={() => navigation.goBack()} />
      <Button title='Ir a pantalla 5'
        onPress={() => navigation.navigate('Pantalla5')} />
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
    //alignItems: 'flex-start',
    //flexWrap: 'wrap'
  },
  box1: {
backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 30,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  box2: {
backgroundColor: 'blue',
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 30,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  },
  box3: {
backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})