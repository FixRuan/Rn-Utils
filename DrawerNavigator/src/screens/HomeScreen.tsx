import React from "react";
import {TouchableOpacity, View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen(){
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <TouchableOpacity onPress={() => navigation.navigate("NotificationsScreen")}>
        <Text>Go to Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}
