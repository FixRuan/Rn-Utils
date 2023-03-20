import React from "react";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Button, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value }
    ]
  }));

  function handleAnimation() {
    if (scale.value === 1) {
      scale.value = 1.5;
    } else {
      scale.value = 1;
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.element, animatedStyle]} />

      <Button title="Animar" onPress={handleAnimation} />
    </View>
  );
}