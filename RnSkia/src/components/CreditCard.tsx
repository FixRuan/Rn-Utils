import React from "react";
import {ActivityIndicator, Dimensions, TouchableOpacity} from "react-native";

import Lato from "../assets/fonts/Lato.ttf";

import { 
  Canvas, 
  RoundedRect, 
  LinearGradient, 
  vec, 
  Circle,
  Group,
  useFont,
  Text,
  TextPath,
  Skia,
  Blur,
} from "@shopify/react-native-skia";

const width = Dimensions.get("window").width - 24;
const height = 200;

export function CreditCard(){
  const font = useFont(Lato, 16);
  const circle = Skia.Path.Make();
  circle.addCircle(30, -10, 50);

  if(font === null){
    return <ActivityIndicator size={24}/>;
  }

  return(
    <TouchableOpacity activeOpacity={0.8}>
      <Canvas style={{ height, width }}>
        <RoundedRect x={0} y={0} width={width} height={height} r={10}>
          <LinearGradient 
            start={vec(0,0)}
            end={vec(256,256)}
            colors={["#5b9a93", "#2e645f", "#40534d", "#5b9a93"]}
          />
        </RoundedRect>

        <Group blendMode="overlay">
          <Circle cx={width - 60} cy={40} r={20} color="#d6a485" />
          <Circle cx={width - 40} cy={40} r={20} color="#98504b" />
        </Group>

        <Text 
          x={20}
          y={50}
          font={font}
          color="#FFFFFF"
          text="Operadora do cartão"
        />

        <Text 
          x={20}
          y={height - 90}
          font={font}
          color="#FFFFFF"
          text="5432 2341 2356 8921"
        />

        <Text 
          x={20}
          y={height - 30}
          font={font}
          color="#FFFFFF"
          text="12/2025"
        />

        <Text 
          x={width - 60}
          y={height - 30}
          font={font}
          color="#FFFFFF"
          text="000"
        />

        <TextPath 
          text="Cartão de crédito virtual"
          font={font}
          path={circle}
          color="#000000"
          opacity={0.3}
        >
          <Blur blur={1}/>
        </TextPath>
      </Canvas>
    </TouchableOpacity>
  );
}
