import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchBar from "./SearchBar";
import Add from "../../assets/svgnew/Add";
import { BlurView } from "expo-blur";

const CardTab = () => {
  return (
    <View style={[s`w-52 mr-4 rounded-3xl h-full bg-primary`, { elevation: 1 }]}>
      {/* First view with a full rounded white background above heading */}
      <View style={s`w-12 h-12 rounded-full bg-white mt-5 ml-4`}>
        {/* This view is just a small rounded white background */}
      </View>

      {/* First view with heading */}
      <View style={s`mt-4 ml-5 mr-2 mb-1`}>
        <Text style={[s`text-2xl text-white`, { fontFamily: "Outfit-Bold" }]}>
          Game Dev
        </Text>
      </View>

      {/* Second view for description */}
      <View style={s`mr-4 ml-5`}>
        <Text style={s`text-sm text-gray-500`}>
          This is a brief description of the topic. It provides an character
          count is 50 and word count 17.
        </Text>
      </View>
      
       {/* New view with white background, 10% opacity, and background blur */}
       {/* <View style={s`mr-4 ml-5 mt-4`}>
        <BlurView
          intensity={50} // Adjust blur intensity (0-100)
          style={[styles.blurContainer, { borderRadius: 5 }]}
        >
          <Text style={styles.dateText}>12/28/2024</Text>
        </BlurView>
      </View> */}

      {/* Third view with an arrow icon pointing right */}
      <View style={[styles.arrowContainer]}>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    position: "absolute",
    bottom: 14,
    right: 14,
    width: 48, // 12 * 4 to match the size
    height: 48, // 12 * 4 to match the size
    borderRadius: 24, // half of width/height to make it circular
    borderColor: "white", // change the border color to white
    borderWidth: 2, // set the width of the border
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    width: 56, // w-14
    height: 28, // h-7
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // white with 10% opacity
  },
});

export default CardTab;
