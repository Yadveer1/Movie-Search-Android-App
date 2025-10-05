import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChange?: (text: string) => void;
}

const SearchBar = ({placeholder, value, onPress, onChange}:Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} resizeMode="contain" tintColor="#ab8bff" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        onPress={onPress}
        value={value}
        onChangeText={onChange}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;