// screens/RequestScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Request Screen</Text>
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

export default RequestScreen;
