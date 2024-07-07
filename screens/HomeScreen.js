import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation(); 
  return (
    <View style={{backgroundColor:'#FFE9C8',flex:1}}>
      <Text>Welcome to the Homed Screen!</Text>
      <Button
        title="Go Live"
        onPress={() => navigation.navigate('LiveView')}
      />
    </View>
  );
};

export default HomeScreen;
