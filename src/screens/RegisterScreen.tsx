import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { User } from '../navigator/StackNavigator'
import { useNavigation } from '@react-navigation/native'

interface FormRegister {
  name: string,
  lastName: string,
  ced: string,
  dateBirthday: string,
  user: string,
  email: string,
  password: string
}

interface Props {
  users: User[];    //arreglo con la lista de usuarios
  handleAddUser: (user: User) => void;   //función para agregar usuarios al arreglo
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {

  //hook useState: permite gestionar el estado del formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    lastName: '',
    ced: '',
    dateBirthday: '',
    user: '',
    email: '',
    password: ''
  });

  //hook useNavigation: permite navegar de una pantalla a otra
  const navigation = useNavigation();

  //función capturar los datos del formulario
  const handleChangeValue = (name: string, value: string): void => {
    //modificar el estado del formulario
    setFormRegister({ ...formRegister, [name]: value });
  }

  //función para verificar si el usuario existe
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email == formRegister.email)[0];
    return existUser;
  }

  //función para generar los ids de los nuevos usuarios
  const getIdUser = (): number => {
    const getId = users.length + 1;
    return getId;
  }

  //función para registrar
  const handleRegister = (): void => {
    //Validar que los campos se encuentren llenos
    if (formRegister.name == '' || formRegister.lastName == '' || formRegister.ced == '' || formRegister.dateBirthday == '' 
      || formRegister.user == '' || formRegister.email == '' || formRegister.password == '') {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    //Validar si existe el usuario
    if (verifyUser()) {
      Alert.alert("Error", "El usuario ya se encuentra registrado");
      return;
    }
    //Registrar al usuario en el arreglo
    //Crear objeto user
    const newUser: User = {
      id: getIdUser(),
      name: formRegister.name,
      lastName: formRegister.lastName,
      ced: formRegister.ced,
      dateBirthday:formRegister.dateBirthday,
      user: formRegister.user,
      email: formRegister.email,
      password: formRegister.password
    }

    //Añadir en el arreglo
    handleAddUser(newUser);
    Alert.alert("Registro", "Usuario registrado con éxito");
    //Redireccionar al login
    navigation.goBack();
    //console.log(formRegister);
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
        name='ced' />
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

      <ButtonComponent buttonText='Registrar' onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={stylesGlobal.link}>Volver al inicio de sesión</Text>
      </TouchableOpacity>
    </View>
  )
}
