import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    children: ReactNode;
}

export const AppBackground = ({ children }: Props) => {
    return (
        <ImageBackground
            source={require('../../assets/store.png')}
            style={stylesGlobal.appBackground}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    );
};