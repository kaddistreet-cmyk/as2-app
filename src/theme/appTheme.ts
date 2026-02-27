import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 70,
        paddingHorizontal: 5,
        paddingTop: 90
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBody: {
        paddingHorizontal: 10,
        paddingTop: 90,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5
    },
    title: {
        fontSize: 25,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        marginVertical: 5,
        padding: 30
    },
    input: {
        width: '80%',
        height: 45,
        marginVertical: 4,
        borderRadius: 8,
        backgroundColor: '#E8E3DA',
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center',
        width: '80%',
        marginVertical: 3,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    logo: {
        width: 650,
        height: 650,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -130
    },
    link: {
        color: PRIMARY_COLOR,
        marginTop: 5,
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    appBackground: {
        flex: 1
    },
    headerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 45,
        paddingBottom: 10
    },

    iconHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textIconCart: {
        backgroundColor: '#D4AF37',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 20,
        marginRight: 8,
        overflow: 'hidden'
    },
    containerCard: {
        backgroundColor: '#f8f3f3',
        borderRadius: 12,
        padding: 10,
        marginVertical: 10,
        width: 160,
        alignItems: 'center',
        elevation: 4
    },

    imageCard: {
        width: 120,
        height: 120,
    },
    iconCart: {
        marginTop: 2,
        alignItems: 'flex-end'
    },
    titleCard: {
        color: '#D4AF37',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 5
    },

    priceCard: {
        color: '#010103',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    stockCard: {
        color: '#114438',
        fontSize: 12,
        textAlign: 'center'
    }, containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },

    bodyModal: {
        backgroundColor: '#1A1A1A',
        borderRadius: 12,
        padding: 15,
    },

    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    titleModal: {
        color: '#D4AF37',
        fontSize: 16,
        fontWeight: 'bold',
    },

    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },

    textDescriptionTable: {
        color: '#CCCCCC',
        fontWeight: '600',
    },

    rowTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#2C2C2C',
    },

    textRowName: {
        color: '#FFFFFF',
        width: 130,
    },

    textRow: {
        color: '#FFFFFF',
        marginHorizontal: 10,
    },

    textRowQty: {
        color: '#FFFFFF',
        marginHorizontal: 25,
    },

    containerTotalPay: {
        marginTop: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },

    textTotalPay: {
        color: '#D4AF37',
        fontWeight: 'bold',
        textAlign: 'right',
    },

    buttonBuy: {
        marginTop: 12,
        backgroundColor: '#D4AF37',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    imageModal: {
        width: 200,
        height: 200,
    },

    textStock: {
        color: '#FF6B6B',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },

    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        gap: 15,
    },

    buttonQuantity: {
        backgroundColor: '#2A2A2A',
        width: 45,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D4AF37',
    },

    buttonQuantityText: {
        color: '#D4AF37',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textQuantity: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    textTotalPrice: {
        color: '#D4AF37',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },

    textStockSmall: {
        color: '#CCCCCC',
        marginTop: 6,
    },
})
