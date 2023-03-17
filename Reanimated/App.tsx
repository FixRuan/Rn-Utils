import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Home />
    </GestureHandlerRootView>
  );
}
