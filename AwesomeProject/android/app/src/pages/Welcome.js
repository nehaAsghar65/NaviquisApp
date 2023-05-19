import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-bootstrap';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <View  style={{justifyContent:"center", justifyContent:"center", textAlign:"center", alignContent:"center" }}>
      <Text style={styles.center}>
        Let's Get Started!
      </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#877dfa',
    
   
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    
  },
  center:{
    fontSize:20,
    
  },
});

export default Welcome;
