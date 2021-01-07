import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Cart from '../../assets/components/Cart';
import Product from '../../assets/components/Product';

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
            <Cart quantity={totalProduct}/>
            {/* <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} /> */}
            <Product onButtonPrees={() => alert('hello')} />
        </View>
    );
};

export default Communication;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});
