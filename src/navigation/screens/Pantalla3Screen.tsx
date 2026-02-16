import React, { useState } from 'react'
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Pantalla3Screen = ({ navigation }: Props) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [cumple, setCumple] = useState('')
  const [correo, setCorreo] = useState('')
  const [cedula, setCedula] = useState('')
  const [contacto, setContacto] = useState('')

  const registrar = () => {
    if (!nombre || !apellido || !usuario || !contrasena || !cumple || !correo || !cedula || !contacto) {
      Alert.alert('Faltan datos', 'Completa todos los campos.')
      return
    }

    if (!correo.includes('@') || !correo.includes('.')) {
      Alert.alert('Correo inválido', 'Ingresa un correo válido.')
      return
    }

    Alert.alert('Registro', 'Usuario registrado')
    navigation.navigate('Pantalla1')
  }

  return (
    <SafeAreaView style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>REGISTRO</Text>

      <TextInput
        style={stylesGlobal.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Fecha de cumpleaños (dd/mm/aaaa)"
        value={cumple}
        onChangeText={setCumple}
        keyboardType="numeric"
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
        keyboardType="numeric"
      />
      <TextInput
        style={stylesGlobal.input}
        placeholder="Teléfono"
        value={contacto}
        onChangeText={setContacto}
        keyboardType="phone-pad"
      />

      <View style={stylesGlobal.buttonContainer}>
        <TouchableOpacity style={stylesGlobal.button} onPress={registrar}>
          <Text style={stylesGlobal.buttonText}>CREAR CUENTA</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={stylesGlobal.link}>Volver al inicio de sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
