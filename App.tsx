import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';
//import Home from './src/SCREENS/Home';
import Login from './src/SCREENS/Login';

//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

//await SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={ THEME }>
      <Login/>
    </ThemeProvider>
  );
}