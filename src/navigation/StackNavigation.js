import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { CameraDetector } from "../screens";

const Stack = createNativeStackNavigator();

const Stacknav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CameraDetector" component={CameraDetector} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Stacknav };
