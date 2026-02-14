import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla9Screen = ({ navigation }: Props) => {
    return (
        <View style={[stylesGlobal.container, { flex: 1 }]}>
            <Text style={stylesGlobal.title}>Ejercicio 9</Text>
            <View style={styles.container}>
                <Text style={styles.box1}>Caja</Text>
                <Text style={styles.box2}>Caja</Text>
                <Text style={styles.box3}>Caja</Text>
            </View>
            <Button title='Regresar'
                onPress={() => navigation.goBack()} />
            <Button title='Ir a pantalla 10'
                onPress={() => navigation.navigate('Pantalla10')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F4A60',
        position: 'relative',
    },
    box1: {
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        top: 200,
        left: 120,
    },
    box2: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        top: 280,
        left: 180,
    },
    box3: {
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        top: 340,
        left: 110,
    },
})
