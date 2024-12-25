import React from "react";
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

const CardTab = () => {
  return (
    <View
      style={[s`w-52 mr-4 rounded-3xl h-full bg-primary`, { elevation: 1 }]}
    ></View>
  );
};

export default CardTab;

const styles = StyleSheet.create({});
