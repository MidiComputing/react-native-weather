import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { data } from './data';
import Home from './src/Screens/Home';

export default function App() {

  return (
    <View style={styles.container}>
      <Home />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
