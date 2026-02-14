import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla7Screen = ({ navigation }: Props) => {
    return (
        <View style={[stylesGlobal.container, { flex: 1 }]}>
            <Text style={stylesGlobal.title}>Ejercicio 7</Text>
            <View style={styles.container}>
                <Text style={styles.box1}>Caja</Text>
                <Text style={styles.box2}>Caja</Text>
                <Text style={styles.box3}>Caja</Text>
            </View>
            <Button title='Regresar'
                onPress={() => navigation.goBack()} />
            <Button title='Ir a pantalla 8'
                onPress={() => navigation.navigate('Pantalla8')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#538D91',
        justifyContent: 'flex-start',
        padding: 1,
        alignItems: 'stretch'
    },
    box1: {
        height: 150,
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'white',
        marginBottom: 1,
    },
    box2: {
        height: 150,
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white',
        marginBottom: 1,
    },
    box3: {
        flex: 1,
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'white',
    },
})
