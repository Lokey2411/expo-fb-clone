import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LanguageSelectBox from "../../components/LanguageSelectBox";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import ButtonActions from "../../components/ButtonActions";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
	const navigation = useNavigation<any>();
	const forgotPassHandler = () => {};
	const logInHandler = () => {};
	const toSignUpHandler = () => {
		navigation.navigate("Signup");
	};
	return (
		<View>
			<View>
				<LanguageSelectBox />
				<Logo />
				<InputField placeholder="Mobile number or email" />
				<InputField
					placeholder="Password"
					secureTextEntry
				/>
				<ButtonActions
					text="Login"
					onPress={logInHandler}
				/>
				<TouchableOpacity onPress={forgotPassHandler}>
					<Text>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
			<ButtonActions
				isSecondary
				text="Create new Account"
				onPress={toSignUpHandler}
			/>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
