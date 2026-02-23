import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: PRIMARY_COLOR,
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

    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
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
        color: PRIMARY_COLOR,
        marginTop: 15,
        fontSize: 14,
        textDecorationLine: 'underline'
    }
})
