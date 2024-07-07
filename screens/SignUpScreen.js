// screens/SignUpScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <SignUpForm navigation={navigation} />
      <Button title="Already have an account? Log in" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignUpScreen;
