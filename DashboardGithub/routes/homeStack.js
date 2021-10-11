import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Acceuil from '../views/Acceuil';
import Dashboard from '../views/Dashboard';
import Details from '../views/Details';
import Header from '../components/Header';
import React from 'react';


const screens = {
    Home : {
        screen : Acceuil,
        navigationOptions : {
            headerTitle : () => <Header />,
        }
    },

    Dashboard :{
        screen : Dashboard,
    },

    Details : {
        screen : Details,
    }

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor : '#fff',
        headerStyle : {backgroundColor : '#0099fe'}
    }
})

export default createAppContainer(HomeStack)