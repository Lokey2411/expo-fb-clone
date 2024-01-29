import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./HomeTab";
import Post from "../screens/Post";

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="HomeTab"
				component={HomeTab}
			/>
			<Stack.Screen
				name="Post"
				component={Post}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;

const styles = StyleSheet.create({});
