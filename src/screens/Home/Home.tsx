import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import LogoText from "../../components/LogoText";
import HeaderMenu from "../../components/HeaderMenu";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
const Home = () => {
	return (
		<View style={styles.container}>
			<Header
				HeaderLeft={() => <LogoText />}
				HeaderRight={() => (
					<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<HeaderMenu>
							<Feather
								name="plus"
								size={24}
								color="black"
							/>
						</HeaderMenu>
						<HeaderMenu>
							<FontAwesome5
								name="search"
								size={20}
								color="black"
							/>
						</HeaderMenu>
						<HeaderMenu>
							<FontAwesome5
								name="facebook-messenger"
								color="black"
								size={20}
							/>
						</HeaderMenu>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
