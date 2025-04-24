import '../gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import { colors } from 'src/shared/styles';
import { StackNavigator, TabNavigator, DrawerNavigator } from './navigations/screenNavigation';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.lighter : colors.darker,
    flex:1
  };
  return (
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
  );
};

export default App;
