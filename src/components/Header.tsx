import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	HeaderLeft: React.FC;
	HeaderRight: React.FC;
};

const Header = (props: Props) => {
	return (
		<View style={{ flexDirection: "row", width: "100%", paddingHorizontal: 8, justifyContent: "space-between", alignItems: "center" }}>
			<props.HeaderLeft />
			<props.HeaderRight />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
