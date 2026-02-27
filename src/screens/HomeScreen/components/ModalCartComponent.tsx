import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Cart } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';

interface Props {
    cart: Cart[];        //arreglo con la lista de productos del carrito
    isVisible: boolean;
    hiddenModal: () => void;
}

export const ModalCartComponent = ({ isVisible, cart, hiddenModal }: Props) => {
    const { width } = useWindowDimensions();


    //función para calcular el total a pagar
    const totalPay = (): number => {
        let total = 0;
        cart.forEach((product) => {            // recorrer colecciones
            total += product.total;
        });
        return total;
    };

    //función para comprar
    const handleBuy = () => {
        hiddenModal();
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{ ...stylesGlobal.bodyModal, width: width * 0.85 }}>

                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>Carrito - Gold Technology</Text>
                        <View style={stylesGlobal.iconCart}>
                            <Icon name="cancel" size={24} color={TERTIARY_COLOR} onPress={hiddenModal} />
                        </View>
                    </View>

                    <View style={stylesGlobal.headerTable}>
                        <Text style={stylesGlobal.textDescriptionTable}>Producto</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ ...stylesGlobal.textDescriptionTable, marginHorizontal: 10 }}>Pre.</Text>
                            <Text style={{ ...stylesGlobal.textDescriptionTable, marginHorizontal: 10 }}>Cant.</Text>
                            <Text style={{ ...stylesGlobal.textDescriptionTable, marginHorizontal: 10 }}>Total</Text>
                        </View>
                    </View>

                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={stylesGlobal.rowTable}>
                                <Text style={stylesGlobal.textRowName} numberOfLines={1}>
                                    {item.name}
                                </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={stylesGlobal.textRow}>${item.price.toFixed(2)}</Text>
                                    <Text style={stylesGlobal.textRowQty}>{item.quantity}</Text>
                                    <Text style={stylesGlobal.textRow}>${item.total.toFixed(2)}</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={stylesGlobal.containerTotalPay}>
                        <Text style={stylesGlobal.textTotalPay}>Total a pagar: ${totalPay().toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity style={stylesGlobal.buttonBuy} onPress={handleBuy}>
                        <Text style={stylesGlobal.buttonText}>Comprar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
};