// navigation/HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false,   tabBarLabel: 'Homee'}}/>
      <Stack.Screen name="LiveView" component={LiveScreen} options={{   tabBarLabel: 'Live View'}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
