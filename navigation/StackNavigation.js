import React from "react";
import { createStackNavigator } from "@react-navigation/Stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
