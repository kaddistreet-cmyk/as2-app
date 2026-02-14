import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla6Screen = ({ navigation }: Props) => {
    return (
        <View style={[stylesGlobal.container, { flex: 1 }]}>
            <Text style={stylesGlobal.title}>Ejercicio 6</Text>
            <View style={styles.container}>
                <Text style={styles.box1}>Caja</Text>
                <Text style={styles.box2}>Caja</Text>
                <Text style={styles.box3}>Caja</Text>
            </View>
            <Button title='Regresar'
                onPress={() => navigation.goBack()} />
            <Button title='Ir a pantalla 7'
                onPress={() => navigation.navigate('Pantalla7')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F4A60',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingVertical: 10,
        paddingHorizontal: 2,
    },

    box1: {
        width: 70,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'blue'
    },

    box2: {
        width: 70,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'red'
    },

    box3: {
        width: 70,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'blue'
    },
})
