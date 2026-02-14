import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({ navigation }: Props) => {

  const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [pares, setPares] = useState<number[]>([])
  const [impares, setImpares] = useState<number[]>([])


  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>BIENVENIDO</Text>
      <Text>Vector: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14</Text>
      <Button
        title="Separar pares e impares"
        onPress={() => {
          const numerosPares = arreglo.filter((valor) => valor % 2 === 0)
          const numerosImpares = arreglo.filter((valor) => valor % 2 !== 0)
          setPares(numerosPares)
          setImpares(numerosImpares)
        }}
      />
      <View>
        <Text>Numeros pares:</Text>
        <Text>
          {pares.join(", ")}
        </Text>
      </View>
      <View>
        <Text>Numeros impares</Text>
        <Text>
          {impares.join(", ")}
        </Text>
      </View>
      <Button title='Ir a pantalla 2'
        onPress={() => navigation.navigate('Pantalla2')} />
    </View>
  )
}
