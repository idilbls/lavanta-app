import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Basket = props =>{

    return(
        <View style={styles.container}>
            <Text>Basket Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Basket;