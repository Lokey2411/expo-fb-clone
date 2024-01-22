import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

type Props = {
	isSecondary?: boolean;
	text: string;
} & TouchableOpacityProps;

const ButtonActions = ({ isSecondary, text, ...props }: Props) => {
	const backgroundColor = isSecondary ? "#fff" : colors.primary;
	const textColor = isSecondary ? colors.primary : "#fff";
	return (
		<TouchableOpacity
			style={{
				backgroundColor,
				borderColor: colors.primary,
				borderWidth: 1,
			}}
			{...props}
		>
			<Text
				style={{
					fontSize: 18,
					color: textColor,
				}}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonActions;

const styles = StyleSheet.create({});
