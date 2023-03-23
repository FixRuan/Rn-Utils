import React from "react";
import { Button, View } from "react-native";
import { styles } from "./styles";

import { GestureDetector, Gesture } from "react-native-gesture-handler";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring
} from "react-native-reanimated";

export function Home() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value }
    ]
  }));

  const onTap = Gesture
    .Tap()
    .onStart(() => console.log("Button pressed"));

  function handleAnimation() {
    if (scale.value === 1) {
      scale.value = withTiming(1.5, { easing: Easing.bounce });
    } else {
      scale.value = withSpring(1);
    }
  }

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onTap}>
        <Animated.View style={[styles.element, animatedStyle]} />
      </GestureDetector>

      <Button title="Animar" onPress={handleAnimation} />
    </View>
  );
}