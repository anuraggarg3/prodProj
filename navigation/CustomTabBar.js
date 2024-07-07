// navigation/CustomTabBar.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Replace with your chosen icon library
import { TouchableOpacity, View, Text } from 'react-native';
import Icontest from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const getex = (x) => {
 console.log(x);
 if(x==0) return ''
};
const CustomTabBar = ({ state, descriptors, navigation }) => {
  console.log(state.index)
  return (
    <View 
    style={{position: 'absolute', flexDirection: 'row', backgroundColor: '#2F2F2F', borderRadius: 30, padding: 10,left:15,right:15,bottom:10 ,
    display:getex(state.index),
  }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title;
        const isFocused = state.index === index;

        const iconName = isFocused ? options.tabBarActiveIcon : options.tabBarIcon;
        const Icon = options.tabBarIconComponent ? options.tabBarIconComponent : (iconName) => <Icontest name="rightcircleo" size={20} color="white" />; 
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {Icon(iconName)}
            {label && <Text style={{ color: isFocused ? '#FF9500' : '#EBEBF5' }}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
