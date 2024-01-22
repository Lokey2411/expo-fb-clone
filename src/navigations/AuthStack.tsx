import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				name="Signup"
				component={Signup}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
