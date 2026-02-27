import React, { useState } from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { BodyComponent } from '../components/BodyComponent';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormLogin {
  email: string;
  password: string;
}

interface Props {
  users: User[];     //arreglo con la lista de usuarios
}

export const LoginScreen = ({ users }: Props) => {

  //hook useState: permite gestionar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  //hook useState: permite gestionar el estado de la contraseña
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permite navegar de una pantalla a otra
  const navigation = useNavigation();

  //función capturar los datos del formulario
  const handleChangeValue = (name: string, value: string): void => {
    //llamar función para actualizar el estado del formulario
    setFormLogin({ ...formLogin, [name]: value });
  }

  //función verificar si existe el usuario
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
    return existUser;
  }

  //función iniciar sesión
  const handleSignIn = (): void => {
    //Validar que los campos se encuentren llenos
    if (formLogin.email == '' || formLogin.password == '') {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    //Validar la existencia del usuario
    if (!verifyUser()) {
      Alert.alert("Error", "Usuario y/o contraseña incorrectos")
      return;
    }
    //Si todo sale bien le enviamos la navegación al Home
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    //console.log(formLogin);
  }
  return (

    <View>
      <StatusBar />

      < BodyComponent>
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
        <ButtonComponent buttonText='REGISTRATE' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))} />
      </BodyComponent>
      <View style={stylesGlobal.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={stylesGlobal.logo}
        />
      </View>
    </View>
  )
}

