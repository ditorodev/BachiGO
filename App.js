import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'; 


import HomeScreen from './HomeScreen.js';
import TrophyScreen from './TrophyScreen.js';
import ExploreScreen from './ExploreScreen.js';
//import LoginScreen from './LoginScreen.js';

export default createBottomTabNavigator
(
    {
      //'Login' : {screen: LoginScreen},
      'Home': { screen: HomeScreen },
      'Explorar': { screen: ExploreScreen },
      'Royal League': { screen: TrophyScreen },
    },

    {
      navigationOptions: ({ navigation }) => 
        ({
          tabBarIcon: ({ focused, tintColor }) => 
            {
              const { routeName } = navigation.state;
              let iconName;
              switch (routeName)
              {
              case 'Explorar':
                iconName = `ios-compass${focused ? '' : '-outline'}`;
                return <Ionicons name={iconName} size={35} color={tintColor} />;
                break;

              case'Royal League':
                iconName = `ios-trophy${focused ? '' : '-outline'}`;
                return <Ionicons name={iconName} size={35} color={tintColor} />;
                break;

              case'Home':
              iconName = `ios-home${focused ? '' : '-outline'}`;
              return <Ionicons name={iconName} size={35} color={tintColor} />;
              break;
              }
            },
        }),

        tabBarOptions: 
        {
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);
