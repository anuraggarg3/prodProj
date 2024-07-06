import React from 'react';
import { View, Text } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

export default SignUpScreen;
