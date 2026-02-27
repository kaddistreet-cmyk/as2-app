import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { BodyComponent } from '../../components/BodyComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constants';
import { stylesGlobal } from '../../theme/appTheme';
import { TitleComponent } from '../../components/TitleComponent';
import { CardProductComponent } from './components/CardProductComponent';
import { ModalCartComponent } from './components/ModalCartComponent';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface de los objetos de mi carrito de compras
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //Datos de prueba
    const products: Product[] = [
        {
            id: 1,
            name: 'Iphone 17 Pro 256GB - Silver',
            price: 1000,
            stock: 10,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RVRqUkJqUGFyN1pGMnlaV3JkWU9jdjF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFFxd1ZHd3R2RmlpWk50MW5LU2N1cWNxdlBsK2ZicnRLY2oza08vTDBZeXZ3&traceId=1',
        },
        {
            id: 2,
            name: 'Iphone 17 Pro 256GB - Cosmic Orange',
            price: 1000,
            stock: 8,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RnVrUzFnTVVSUnNLVnZUWUMxNTBGaGhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHQyaWthYXpzcEpXMExJLy9GTE9wWkNn&traceId=1',
        },
        {
            id: 3,
            name: 'Iphone 17 Pro 256GB - Deep Blue',
            price: 1000,
            stock: 6,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RWhhOHJGRUNHdlh6a3VuZVVqdnNrNXVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHREelVULzVXd2xCbVltNVMyUXhsYlBpMEowc2xaa1ByZlpMdyt3ZFlhVkhn&traceId=1',
        },

        {
            id: 4,
            name: 'Iphone 16 Plus 256GB - Teal',
            price: 899,
            stock: 5,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-teal?wid=5120&hei=2880&fmt=webp&qlt=90&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L0IwNTFtRWJyTEhXTVJ5VURtbkU2V3F2TWlpSzUzejRCZGt2SjJUNGl1VEE4bm1RcmlWRWp2eDN1WHNkSjNmUllzdEloeWpsNHM1ODlJeTR1WVJnV20&traceId=1',
        },
        {
            id: 5,
            name: 'Iphone 16 Plus 256GB - Pink',
            price: 899,
            stock: 7,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-pink?wid=5120&hei=2880&fmt=webp&qlt=90&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OGNDaFdYdHQ0L2VyT2lVS3J0dUtUeHF2TWlpSzUzejRCZGt2SjJUNGl1VEE4bm1RcmlWRWp2eDN1WHNkSjNmUlkxRnJpVFI4NGhndHdQd2RyT05hdjY&traceId=1',
        },
        {
            id: 6,
            name: 'Iphone 16 Plus 256GB - Ultramarine',
            price: 899,
            stock: 9,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=5120&hei=2880&fmt=webp&qlt=90&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUp1NDJCalJ6MnpHSm1KdCtRZ0FvSDJrQmVLSXFrTCsvY1VvVmRlZkVnMzJKTG1lVWJJT2RXQWE0Mm9rU1V0V0Q4OFk3MnZieXRxSHQ2dGNrSFE2Uys0UmdXWi9jaTBCeEx5VFNDNXdWbmdB&traceId=1',
        },

        {
            id: 7,
            name: 'MagSafe Charger (1 m)',
            price: 39.0,
            stock: 12,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=532&hei=582&fmt=png-alpha&.v=Nm9pdHNQWlpqeUxJK05lY2hoUkdzZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MzNKK09jOHUreEYvZnpSQUVFYUZBZnpxVmhFdC9yK2RzT3FKL1lsOVpPbVE',
        },
        {
            id: 8,
            name: 'iPhone Air MagSafe Battery',
            price: 99.0,
            stock: 8,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=532&hei=582&fmt=png-alpha&.v=aVZlcjV5bGRicVprUm43OVNiWGgzQUhqc0NvK2RZTVd5TWVhUDFuQlo0MmdpY2FtY0dGdHhwS0tQa0hzYm9TMEJ0Uk5qc1dFNmpHMng2S0R6blYwTUE',
        },
        {
            id: 9,
            name: '240W USB-C Charge Cable (2 m)',
            price: 29.0,
            stock: 15,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MU2G3?wid=532&hei=582&fmt=png-alpha&.v=VDR6aHRWaDFmcExoSmNtMlQ5c0hoUUhqc0NvK2RZTVd5TWVhUDFuQlo0MTY0cUsvMVFmWHN5aHY2R05FejlZNWpLVGNQM2N0MHVnejA3TnZTdk9XMlE',
        },
        {
            id: 10,
            name: 'Belkin UltraCharge Pro 2-in-1 Convertible Magnetic Charger',
            price: 129.95,
            stock: 4,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS8F2?wid=532&hei=582&fmt=png-alpha&.v=UnJiMXNTVVcwSkYwek9zMzJNL1Zvd0hqc0NvK2RZTVd5TWVhUDFuQlo0MS9IQ0R1K0VGQzBZR0Z1aHJJQ0pqT2UyL3B0Q1hlVkMvblZidXlLOGZoN1E',
        },
        {
            id: 11,
            name: '35W Dual USB-C Port Compact Power Adapter',
            price: 59.0,
            stock: 10,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW2H3?wid=532&hei=582&fmt=png-alpha&.v=M2VkQnR1Y1RvbnZsSStqclQxSkc1QUhqc0NvK2RZTVd5TWVhUDFuQlo0MkJuN0E3cTM5anB4aXpMZllxREJKYkNWZG9vVDg5ZXJYY0g2akRzVDUzUkE',
        },
        {
            id: 12,
            name: 'USB-C Digital AV Multiport Adapter',
            price: 69.0,
            stock: 6,
            pathImage:
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUF82?wid=532&hei=582&fmt=png-alpha&.v=NGNHdzRIVnYyMjhXZmh0b3lBQ2FEUUhqc0NvK2RZTVd5TWVhUDFuQlo0MkdWdUVzcDlsZENvL2dZUzU2WnR2MzVOQlpWYnZQenlsbThsOFFnbTFBREE',
        },
    ];

    //hook useState: permite gestionar la información de los productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    //hook useState: permite gestionar el estado de mi carrito de compras
    const [cart, setCart] = useState<Cart[]>([]);

    //hook useState: permite gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //función que actualiza el estado del modal
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

    //función para modificar el valor del stock
    const changeStockProduct = (id: number, quantity: number): void => {
        const updateProducts = productsState.map(product =>  // inmutabilidad del estado - cambios - nuevo a
            product.id == id
                ? { ...product, stock: product.stock - quantity }
                : product
        );
        //Modificar mi arreglo de productos
        setProductsState(updateProducts);
        //llamar función para añadir producto al carrito
        addProduct(id, quantity);
    }

    //función para agregar productos al arreglo del carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id == id);
        //si no existe el producto
        if (!product) return;

        //crear objeto para agregar al carrito
        const newCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        };
        //agregar al arreglo del carrito
        setCart([...cart, newCart]);
    }

    return (
        <View>

            <View style={stylesGlobal.headerHome}>
                <TitleComponent title='Gold Technology' />
                <View style={stylesGlobal.iconHome}>
                    <Text style={stylesGlobal.textIconCart}>
                        {cart.length}
                    </Text>
                    <Icon
                        name='shopping-cart'
                        size={30}
                        color={SECONDARY_COLOR}
                        onPress={hiddenModal}
                    />
                </View>
            </View>

            <View>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) =>
                        <CardProductComponent
                            item={item}
                            changeStockProduct={changeStockProduct}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                />
            </View>

            <ModalCartComponent
                isVisible={showModal}
                cart={cart}
                hiddenModal={hiddenModal}
            />

        </View>
    )
}