import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen, Splashscreen } from "../pages";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
