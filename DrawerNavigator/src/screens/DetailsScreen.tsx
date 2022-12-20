import React from "react";
import {TouchableOpacity, View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function DetailsScreen(){
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Details Screen</Text>
    </View>
  );
}
