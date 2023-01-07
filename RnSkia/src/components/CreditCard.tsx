import React from "react";
import { 
  Canvas, 
  RoundedRect, 
  LinearGradient, 
  vec, 
  Circle 
} from "@shopify/react-native-skia";
import {Dimensions} from "react-native";

const width = Dimensions.get("window").width - 24;
const height = 200;

export function CreditCard(){
  return(
    <Canvas style={{ height, width }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={10}>
        <LinearGradient 
          start={vec(0,0)}
          end={vec(256,256)}
          colors={["#5b9a93", "#2e645f", "#40534d", "#5b9a93"]}
        />
      </RoundedRect>

      <Circle cx={width - 60} cy={40} r={20} color="#d6a485" />
    </Canvas>
  );
}
