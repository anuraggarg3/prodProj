// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomTabBar from './CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStackNavigator from './HomeStackNavigator';
const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Homes" component={HomeStackNavigator} options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />,
        tabBarActiveIcon: () => <MaterialCommunityIcons name="home-active" size={24} color="black" />,
        tabBarLabel: 'Home',
        headerShown: false,
      }} />
      <Tab.Screen name="Requests" component={RequestScreen} options={{
        tabBarIcon: () => <MaterialCommunityIcons name="file-document" size={24} color="black" />,
        tabBarActiveIcon: () => <MaterialCommunityIcons name="file-document-box-multiple-outline" size={24} color="black" />,
        tabBarLabel: 'Requests',
        headerShown: false
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />,
        tabBarActiveIcon: () => <MaterialCommunityIcons name="home-active" size={24} color="black" />,
        tabBarLabel: 'Chat',
        headerShown: false
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />,
        tabBarActiveIcon: () => <MaterialCommunityIcons name="home-active" size={24} color="black" />,
        tabBarLabel: 'Profile',
        headerShown: false
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

