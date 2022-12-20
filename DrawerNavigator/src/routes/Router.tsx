import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {HomeScreen} from "../screens/HomeScreen";
import {NotificationsScreen} from "../screens/NotificationsScreen";
import {DetailsScreen} from "../screens/DetailsScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
      headerTintColor: "#550AB1",
      drawerActiveTintColor: "#550AB1",
      headerStyle: {backgroundColor: "#FEFCF3"},
      drawerStyle: {backgroundColor: "#FEFCF3"}
    }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export function Router(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Drawer" 
        component={DrawerNavigator} 
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
    </Stack.Navigator>
  );
}
