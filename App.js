import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigators/MainNavigator";
// import * as eva from "@eva-design/eva";
// import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
// import { default as theme } from './custom-theme.json';

export default function App() {
  return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
  );
}
