// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('SignUp');
      }
    };

    checkAuthStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
