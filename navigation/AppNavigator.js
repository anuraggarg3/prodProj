// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
