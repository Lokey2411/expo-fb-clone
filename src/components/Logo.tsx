import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
	return (
		<Image
			source={require("../../assets/images/logo.png")}
			style={styles.logo}
		/>
	);
};

export default Logo;

const styles = StyleSheet.create({
	logo: {
		width: 48,
		height: 48,
		borderRadius: 999,
	},
});
