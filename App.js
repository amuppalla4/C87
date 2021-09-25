import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/loginscreen";
import Dashboard from "./screens/DashboardScreen";



import * as firebaseConfig from "firebase";
import {firebaseConfig} from "./config"
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app()
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator  />
    </NavigationContainer>
  );
}
