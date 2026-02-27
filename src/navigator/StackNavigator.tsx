import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { AppBackground } from "../components/AppBackground";
import { useState } from "react";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();

export interface User {
    id: number;
    name: string,
    lastName: string,
    ced: string,
    dateBirthday: string,
    user: string,
    email: string,
    password: string
}

export const StackNavigator = () => {

    //Datos de prueba
    const users: User[] = [
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            ced: '0102030405',
            dateBirthday: '1995-05-10',
            user: 'jperez',
            email: 'jperez@gmail.com',
            password: '123456'
        },
        {
            id: 2,
            name: 'Maria',
            lastName: 'Perez',
            ced: '1102030406',
            dateBirthday: '1998-08-20',
            user: 'mperez',
            email: 'mperez@gmail.com',
            password: '123456'
        }
    ]

    //hook useState: permite gestionar el estado de la lista de usuarios 
    const [listUsers, setListUsers] = useState<User[]>(users); //arreglo - lista de usuarios

    //función para agregar usuarios al arreglos listUsers
    const handleAddUser = (user: User): void => {
        //Modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }

    return (
        <AppBackground>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: { backgroundColor: 'transparent' },

                }}>
                <Stack.Screen name="Login"
                    options={{ headerShown: false }}
                    children={() => <LoginScreen users={listUsers} />} />
                <Stack.Screen
                    name="Register"
                    options={{ headerShown: false }}
                    children={() => (
                        <RegisterScreen
                            users={listUsers}
                            handleAddUser={handleAddUser}
                        />
                    )}
                />
                <Stack.Screen name="Home"
                    options={{ headerShown: false }}
                    component={HomeScreen} />
            </Stack.Navigator>
        </AppBackground>
    );
}