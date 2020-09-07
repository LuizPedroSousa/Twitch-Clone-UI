import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Router from './src/Router';
import context from './src/styles/Utils/themeContext';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'
export default function App() {
  const { theme } = useContext(context)
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Router />
        <StatusBar style={theme.title == 'light' ? 'light' : 'dark'} />
      </>
    );
  }
}