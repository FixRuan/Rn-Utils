import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar translucent={false} backgroundColor="white" style='dark'/>
      <View>
        <Text>i18Next</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
