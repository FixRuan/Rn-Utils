import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {HomeScreen} from "../screens/HomeScreen";
import {NotificationsScreen} from "../screens/NotificationsScreen";

const {Navigator, Screen, Group} = createDrawerNavigator();

export function Router(){
  return(
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen}/>
      <Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Navigator>
  );
}
