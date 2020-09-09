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
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
export default function App() {
  const { theme } = useContext(context)
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
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