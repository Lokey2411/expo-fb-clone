import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const LogoText = () => {
	return (
		<Image
			source={require("../../assets/images/logo-text.png")}
			style={styles.logo}
		/>
	);
};

export default LogoText;

const styles = StyleSheet.create({
	logo: {
		width: 100,
		height: 100,
		objectFit: "contain",
	},
});
