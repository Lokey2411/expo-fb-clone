import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";

const languageBox = ["English", "Vietnamese"];
const LanguageSelectBox = () => {
	const [language, setLanguage] = useState("English");
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setIsOpen(false);
	}, [language]);
	return (
		<TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
			<Text>{language}</Text>
			<Fontisto
				name="angle-down"
				size={24}
				color="black"
			/>
			{isOpen && (
				<FlatList
					data={languageBox}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => setLanguage(item)}>
							<Text>{item}</Text>
						</TouchableOpacity>
					)}
				/>
			)}
		</TouchableOpacity>
	);
};

export default LanguageSelectBox;

const styles = StyleSheet.create({});
