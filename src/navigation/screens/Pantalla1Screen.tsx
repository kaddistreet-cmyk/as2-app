import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({ navigation }: Props) => {

  const [usuario, setUsuario] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')

  const inicioSesion = () => {
    navigation.navigate('Pantalla2')
  }
  const registrarse = () => {
    navigation.navigate('Pantalla3')
  }

  return (

    <SafeAreaView style={stylesGlobal.container}>
      <Image
        source={require('../../assets/store.png')}
        style={stylesGlobal.logo}
        resizeMode="cover"
      />
      <View>
        <Text style={stylesGlobal.title}>BIENVENIDO</Text>
      </View>
      <TextInput
        style={stylesGlobal.input}
        placeholder="Ingrese su usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={stylesGlobal.input}
        placeholder="Ingrese su contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <TouchableOpacity onPress={inicioSesion}>
        <Text style={stylesGlobal.link}>
          ¿Olvidaste tu contraseña? Recupérala aquí
        </Text>
      </TouchableOpacity>


      <View style={stylesGlobal.buttonContainer}>
        <TouchableOpacity
          style={stylesGlobal.button}
          onPress={inicioSesion}
        >
          <Text style={stylesGlobal.buttonText}>
            INICIAR SESIÓN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesGlobal.buttonContainer}>
        <TouchableOpacity
          style={stylesGlobal.button}
          onPress={registrarse}
        >
          <Text style={stylesGlobal.buttonText}>
            REGISTRATE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

