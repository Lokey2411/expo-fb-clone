import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../screens/BottomScreens/Menu";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Menu}
				name="Menu"
			/>
		</Stack.Navigator>
	);
};

export default MenuStack;

const styles = StyleSheet.create({});
