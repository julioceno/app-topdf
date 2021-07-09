import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Jost_300Light,
  Jost_400Regular, 
  Jost_500Medium,
  Jost_600SemiBold 
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font"

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  });

 

  if (!fontsLoaded)
    return <AppLoading/>;

  return (
    <Routes />
  );
}


