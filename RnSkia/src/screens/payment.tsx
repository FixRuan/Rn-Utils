import React from "react";
import { StatusBar, View } from "react-native";
import {CreditCard} from "../components/CreditCard";

import { styles } from "./styles";

export function Payment(){
	return(
		<>
			<StatusBar 
				barStyle="light-content" 
				translucent={false} 
				backgroundColor="#121214"
			/>

			<View style={styles.container}>
				<CreditCard />
			</View>
		</>
	);
}
