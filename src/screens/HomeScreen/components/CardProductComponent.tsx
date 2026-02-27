import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../../commons/constants';
import { ModalProductComponent } from './ModalProductComponent';

interface Props {
    item: Product;
    changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductComponent = ({ item, changeStockProduct }: Props) => {

     //hook useState: permite gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //función para modificar el estado del modal
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

    return (
        <>
            <View style={stylesGlobal.containerCard}>

                <Image
                    source={{ uri: item.pathImage }}
                    style={stylesGlobal.imageCard}
                />

                <View>
                    <Text style={stylesGlobal.titleCard}>
                        {item.name}
                    </Text>

                    <Text style={stylesGlobal.priceCard}>
                        ${item.price.toFixed(2)}
                    </Text>

                    <Text style={stylesGlobal.stockCard}>
                        Stock: {item.stock}
                    </Text>
                </View>

                <View style={stylesGlobal.iconCart}>
                    <Icon
                        name='add-shopping-cart'
                        size={32}
                        color={PRIMARY_COLOR}
                        onPress={hiddenModal}
                    />
                </View>

            </View>

            <ModalProductComponent
                isVisible={showModal}
                item={item}
                hiddenModal={hiddenModal}
                changeStockProduct={changeStockProduct}
            />
        </>
    )
}