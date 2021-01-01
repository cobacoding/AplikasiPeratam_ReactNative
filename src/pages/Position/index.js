import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import cart from '../../assets/icons/shopCart.png';

const Position = () => {
    return (
        <View style={styles.wrapper}>
        <View style={styles.cartWrapper}>
            <Image source={cart} style={StyleSheet.iconCart} />
            <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    );
};

export default Position;

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center'},
    cartWrapper: {
        borderWidth: 1, 
        borderColor: '#4398D1', 
        width: 93, 
        height: 93, 
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    iconCart: {width: 10, height: 10},
    text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
    notif: {
        fontSize: 12, 
        color: 'white', 
        backgroundColor: '#6FCF97', 
        padding: 4, 
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
