import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import cart from '../../icons/shopCart.png';

const Cart = (props) => {
    return (
        <View>
            <View style={styles.cartWrapper}>
            <Image source={cart} style={StyleSheet.iconCart} />
            <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
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
})
