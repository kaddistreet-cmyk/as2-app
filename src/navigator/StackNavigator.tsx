import { createStackNavigator } from "@react-navigation/stack";
import { Pantalla1Screen } from "../screens/Pantalla1Screen";
import { Pantalla3Screen } from "../screens/Pantalla3Screen";
import { SECONDARY_COLOR } from "../commons/constants";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ cardStyle: {
                    backgroundColor: SECONDARY_COLOR
                }
            }}>
            <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla3" options={{ headerShown: false }} component={Pantalla3Screen} />
        </Stack.Navigator>
    );
}