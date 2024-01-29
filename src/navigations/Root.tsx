import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import MainStack from "./MainStack";

const Root = () => {
	const user = "2";
	return user ? <MainStack /> : <AuthStack />;
};

export default Root;

const styles = StyleSheet.create({});
