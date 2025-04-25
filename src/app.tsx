import 'src/gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import { colors } from 'src/shared/styles';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'src/navigations/screenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enum Theme{
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const isDarkMode = useColorScheme() === Theme.DARK;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.lighter : colors.darker,
    flex:1
  };
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <View style={backgroundStyle}>
      <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      <TabNavigator />
      {/* <DrawerNavigator/> */}
      {/* <StackNavigator/> */}
    </View>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
