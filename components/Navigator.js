import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator, createMaterialTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './Home';
import Favorites from './Favorites';
import Basket from './Basket';
import Profile from './Profile';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon : ({ tintColor }) => (
                    <View>
                        <Icon style = {[{color: tintColor}]} size={21} name={'store'}/>
                    </View>
                ),
            },
        },

        Favorites: {
            screen: Favorites,
            navigationOptions: {
                tabBarIcon : ({ tintColor }) => (
                    <View>
                        <Icon style = {[{color: tintColor}]} size={22} name={'heart'}/>
                    </View>
                ),
            },
        },

        Basket: {
            screen: Basket,
            navigationOptions: {
                tabBarIcon : ({ tintColor }) => (
                    <View>
                        <Icon style = {[{color: tintColor}]} size={22} name={'shopping-basket'}/>
                    </View>
                ),
            },
        },

        Profile : {
            screen: Profile,
            navigationOptions: {
                tabBarIcon : ({ tintColor }) => (
                    <View>
                        <Icon style = {[{color: tintColor}]} size={22} name={'user-alt'}/>
                    </View>
                ),
            },
        },
    },

    {
        initialRouteName:'Home',
        activeColor: '#5994ad',
        inactiveColor: '#7e7e7e',
        barStyle: {backgroundColor: 'white'},
        
    }
);

export default createAppContainer(TabNavigator);


