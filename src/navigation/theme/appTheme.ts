import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#D4AF37',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    input: {
        width: '80%',
        height: 45,
        marginVertical: 8,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    buttonContainer: {
        width: '80%',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#D4AF37',
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    logo: {
        width: 480,
        height: 480,
        marginBottom: 20
    },
    link: {
        color: '#D4AF37',
        marginTop: 15,
        fontSize: 14,
        textDecorationLine: 'underline'
    }
})
