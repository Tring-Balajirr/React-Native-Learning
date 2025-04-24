import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/screens/home/homeScreen";
import ProfileScreen from "../components/screens/profile/profileScreen";
import SettingScreen from "../components/screens/settings/settings"
import tabConfig from "./tabConfig";
import ScreenOption from "./screenOption";
export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();



export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    )
}

export const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={ScreenOption}>
        {tabConfig.map((routeConfig) => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
          />
        ))}
      </Tab.Navigator>
    );
  };



export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    )
}

