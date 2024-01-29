import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { colors } from "../styles/colors";

const HeaderMenu = ({ children, ...props }: PropsWithChildren & TouchableOpacityProps) => {
	return (
		<TouchableOpacity
			style={{ borderRadius: 999, backgroundColor: "#d3d3d3", width: 40, height: 40, justifyContent: "center", alignItems: "center", marginHorizontal: 8 }}
			{...props}
		>
			{children}
		</TouchableOpacity>
	);
};

export default HeaderMenu;

const styles = StyleSheet.create({});
