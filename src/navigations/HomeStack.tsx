import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Home/Profile";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;

const styles = StyleSheet.create({});
