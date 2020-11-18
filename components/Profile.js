import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = props =>{

    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
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

export default Profile;