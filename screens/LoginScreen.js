// screens/LoginScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
