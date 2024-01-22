import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";

type Props = {} & TextInputProps;
const InputField = (props: Props) => {
	return (
		<TextInput
			{...props}
			style={styles.input}
		/>
	);
};

export default InputField;

const styles = StyleSheet.create({
	input: {
		width: "100%",
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderRadius: 12,
		borderColor: "#fafafa",
		padding: 10,
	},
});
