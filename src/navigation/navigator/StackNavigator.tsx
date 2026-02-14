import { createStackNavigator } from "@react-navigation/stack";
import { Pantalla1Screen } from "../screens/Pantalla1Screen";
import { Pantalla2Screen } from "../screens/Pantalla2Screen";
import { Pantalla3Screen } from "../screens/Pantalla3Screen";
import { Pantalla4Screen } from "../screens/Pantalla4Screen";
import { Pantalla5Screen } from "../screens/Pantalla5Screen";
import { Pantalla6Screen } from "../screens/Pantalla6Screen";
import { Pantalla7Screen } from "../screens/Pantalla7Screen";
import { Pantalla8Screen } from "../screens/Pantalla8Screen";
import { Pantalla9Screen } from "../screens/Pantalla9Screen";
import { Pantalla10Screen } from "../screens/Pantalla10Screen";


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator /* initialRouteName='Pantalla2' */
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                /* headerShown: false */
                headerStyle: {
                    elevation: 0
                }
            }}>
            <Stack.Screen name="Pantalla1" options={{ title: 'Ejercicio 1' }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{ title: 'Ejercicio 2' }} component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3" options={{ title: 'Ejercicio 3' }} component={Pantalla3Screen} />
            <Stack.Screen name="Pantalla4" options={{ title: 'Ejercicio 4' }} component={Pantalla4Screen} />
            <Stack.Screen name="Pantalla5" options={{ title: 'Ejercicio 5' }} component={Pantalla5Screen} />
            <Stack.Screen name="Pantalla6" options={{ title: 'Ejercicio 6' }} component={Pantalla6Screen} />
            <Stack.Screen name="Pantalla7" options={{ title: 'Ejercicio 7' }} component={Pantalla7Screen} />
            <Stack.Screen name="Pantalla8" options={{ title: 'Ejercicio 8' }} component={Pantalla8Screen} />
            <Stack.Screen name="Pantalla9" options={{ title: 'Ejercicio 9' }} component={Pantalla9Screen} />
            <Stack.Screen name="Pantalla10" options={{ title: 'Ejercicio 10' }} component={Pantalla10Screen} />
        </Stack.Navigator>
    );
}