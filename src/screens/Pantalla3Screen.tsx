import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'

interface Props extends StackScreenProps<any, any> { }

interface FormRegister {
  name: string,
  lastName: string,
  id: string,
  dateBirthday: string,
  user: string,
  email: string,
  password: string
}

export const Pantalla3Screen = ({ navigation }: Props) => {

  //hook useState: permite gestionar el estado del formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    lastName: '',
    id: '',
    dateBirthday: '',
    user: '',
    email: '',
    password: ''
  });

  //función capturar los datos del formulario
  const handleChangeValue = (name: string, value: string): void => {
    //llamar función para actualizar el estado del formulario
    setFormRegister({ ...formRegister, [name]: value });
  }

  //función iniciar sesión
  const handleSignUp = (): void => {
    console.log(formRegister);
  }

  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>REGISTRO</Text>

      <InputComponent placeholder='Nombre'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='name' />
      <InputComponent placeholder='Apellido'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='lastName' />
      <InputComponent placeholder='Cédula'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='id' />
      <InputComponent placeholder='Fecha de cumpleaños'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='dateBirthday' />
      <InputComponent placeholder='Usuario'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='user' />
      <InputComponent placeholder='Correo'
        keyboardType='email-address'
        handleChangeValue={handleChangeValue}
        name='email' />
      <InputComponent placeholder='Contraseña'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='password'
        isPassword={true} />

      <ButtonComponent buttonText='CREAR CUENTA' onPress={handleSignUp} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={stylesGlobal.link}>Volver al inicio de sesión</Text>
      </TouchableOpacity>
    </View>
  )
}
