import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Root = () => {
	const user = "";
	return user ? <HomeStack /> : <AuthStack />;
};

export default Root;

const styles = StyleSheet.create({});
