import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import ListScreen from "../screens/ListScreen";
import HomePageScreen from "../screens/HomePageScreen";
import { NavigationContainer } from "@react-navigation/native";

//Create Stack
const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomePageScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
