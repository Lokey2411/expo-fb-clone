import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import { Feather } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Shop } from "iconsax-react-native";
import Video from "../screens/BottomScreens/Video";
import Friends from "../screens/BottomScreens/Friends";
import Market from "../screens/BottomScreens/Market";
import Noti from "../screens/BottomScreens/Noti";
import MenuStack from "./MenuStack";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: "#000",
			}}
		>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }: any) => (
						<Feather
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Video"
				component={Video}
				options={{
					title: "Video",
					tabBarIcon: ({ color, size }: any) => (
						<Octicons
							name="video"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Friends"
				component={Friends}
				options={{
					title: "Friends",
					tabBarIcon: ({ color, size }: any) => (
						<Ionicons
							name="people-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Market"
				component={Market}
				options={{
					title: "Marketplace",
					tabBarIcon: ({ color, size }: any) => (
						<Shop
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Noti"
				component={Noti}
				options={{
					title: "Noti",
					tabBarIcon: ({ color, size }: any) => (
						<Feather
							name="bell"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="MenuStack"
				component={MenuStack}
				options={{
					title: "Menu",
					tabBarIcon: ({ color, size }: any) => (
						<Feather
							name="menu"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTab;

const styles = StyleSheet.create({});
