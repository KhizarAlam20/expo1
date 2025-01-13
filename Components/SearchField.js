import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";

import AntDesign from "@expo/vector-icons/AntDesign";

const SearchField = () => {
  return (
    <View style={styles.overlaySearchContainer}>
      <View
        style={s`flex flex-row  w-full h-full items-center justify-between`}
      >
        <View style={s`flex flex-row w-2/4 h-6 pr-6 pl-6`}>
          <Text
            style={{ fontFamily: "Outfit-Medium", color: "gray", fontSize: 15 }}
          >
            Search
          </Text>
        </View>

        <View
          style={[
            s`flex bg-primary rounded-xl flex-row  w-10 h-10 justify-center items-center mr-3 `,
            { marginTop: -5 },
          ]}
        >
          <AntDesign name="search1" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  overlaySearchContainer: {
    position: "absolute", // Position text absolutely inside the image container
    top: 220, // Adjust to move the text lower or higher
    left: 20, // Adjust left to control horizontal position
    right: 20,
    bottom: 20, // Optionally adjust the bottom to control vertical positioning
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 30, // Optional: rounded corners for the text background
    width: "full",
    borderColor: "white",
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderRadius: 18,
    margin: 6,
  },
});
