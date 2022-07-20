import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor= '#000'
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />

    </NavigationContainer>

  );
}