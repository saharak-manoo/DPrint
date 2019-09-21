import React, { Component } from 'react';
import { Platform, Text, View, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeView from '../Home/HomeView'
import AddGroupView from '../Home/AddGroup/AddGroupView'
import SettingsView from '../Settings/Settings'
import ProfileView from '../Settings/User/ProfileView'

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeView },
    AddGroup: { screen: AddGroupView },
  },
  {
    headerMode: 'none'
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsView },
    Profile: { screen: ProfileView },
  },
  {
    headerMode: 'none'
  }
)

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Settings') {
          iconName = `menu`;
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    })
  }
);

export default createAppContainer(App);