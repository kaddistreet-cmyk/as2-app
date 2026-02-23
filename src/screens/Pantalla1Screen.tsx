import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

interface Props extends StackScreenProps<any, any> { };

interface FormLogin {
  email: string;
  password: string;
}

export const Pantalla1Screen = ({ navigation }: Props) => {

  //hook useState: permite gestionar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  //función capturar los datos del formulario
  const handleChangeValue = (name: string, value: string): void => {
    //llamar función para actualizar el estado del formulario
    setFormLogin({ ...formLogin, [name]: value });
  }

  //función iniciar sesión
  const handleSignIn = (): void => {
    console.log(formLogin);
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
      <InputComponent placeholder='Correo'
        keyboardType='email-address'
        handleChangeValue={handleChangeValue}
        name='email' />
      <InputComponent placeholder='Contraseña'
        keyboardType='default'
        handleChangeValue={handleChangeValue}
        name='password'
        isPassword={true} />
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={stylesGlobal.link}>
          ¿Olvidaste tu contraseña? Recupérala aquí
        </Text>
      </TouchableOpacity>

      <ButtonComponent buttonText='INICIAR SESIÓN' onPress={handleSignIn} />
      <ButtonComponent buttonText='REGISTRATE' onPress={() => navigation.navigate('Pantalla3')} />

    </SafeAreaView>
  )
}

