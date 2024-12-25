import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";

import AntDesign from "@expo/vector-icons/AntDesign";
import SearchBar from "./SearchBar";
import Add from "../../assets/svgnew/Add";
import CardTab from "./CardTab";

// HomeScreen component
const HomeScreen = () => {
  // Function to handle search icon click
  const handleSearchClick = () => {
    console.log("Search icon clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={s`bg-primary w-full h-64 rounded-br-2xl rounded-bl-2xl`}>
        {/* Image in the background */}
        <View style={styles.imageContainer}>
          <View style={{ opacity: 0.5 }}>
            <Image
              source={require("../../assets/Image/lines.png")}
              style={styles.image}
            />
          </View>

          {/* Text over the image */}
          <View style={styles.overlayTextContainer}>
            <View style={s`w-full h-6 pr-6 pl-6`}>
              <AntDesign name="menu-fold" size={24} color="white" />
            </View>

            <View
              style={s`flex flex-row  justify-between items-center pl-6 pr-6  w-full h-40`}
            >
              {/* View for text and date */}
              <View style={s`flex justify-center w-52 h-full`}>
                <View
                  style={[
                    s` flex justify-center w-full h-8`,
                    { marginBottom: 5 },
                  ]}
                >
                  <Text
                    style={[
                      s`text-gray-500 text-lg`,
                      { fontFamily: "Outfit-Light", marginTop: 5 },
                    ]}
                  >
                    {"Hey, " + "Khizar" + "!"}
                  </Text>
                </View>

                <View>
                  <View
                    style={[
                      s` flex justify-center w-full h-16`,
                      { marginTop: -15 },
                    ]}
                  >
                    <Text
                      style={[
                        s`text-white text-4xl`,
                        { fontFamily: "Outfit-Bold", letterSpacing: -3 },
                      ]}
                    >
                      {"wednesday" + ","}
                    </Text>
                  </View>

                  <View
                    style={[
                      s` flex  justify-center w-full h-8`,
                      { marginTop: -10 },
                    ]}
                  >
                    <Text
                      style={[
                        s`text-gray-500 text-xl`,
                        { fontFamily: "Outfit-Medium" },
                      ]}
                    >
                      22-dec-24
                    </Text>
                  </View>
                </View>
              </View>

              {/* view for profile image */}
              <View
                style={s` rounded-full border border-white border-1 w-16 h-16`}
              ></View>
            </View>
          </View>

          {/* SearchBAr */}
          <SearchBar />
        </View>
      </View>

{/* Border here */}
      <View style={s` w-full h-80 mt-10 pr-9 pl-9`}>
        {/* project tab */}
        <View
          style={s`flex flex-row  pr-2 pl-2 justify-between items-center  w-full h-12  `}
        >
          <Text
            style={[s`text-gray-500 text-xl`, { fontFamily: "Outfit-Bold" , letterSpacing:-1}]}
          >
            Recent Tasks
          </Text>

          <Text
            style={[s`text-gray-400 text-lg`, { fontFamily: "Outfit-Light" }]}
          >
            see all
          </Text>
        </View>

        {/* Project Button */}
        {/* border here */}
        <View
          style={s`flex flex-row  justify-between  w-full h-64  rounded-3xl `}
        >
          <ScrollView
          horizontal
          scrollEventThrottle={1} // Lower value increases scroll responsiveness
          showsHorizontalScrollIndicator={false}

          style={s`rounded-3xl`}
          >
             <CardTab/>
             <CardTab/>
             <CardTab/>
             <CardTab/>
             <CardTab/>
          </ScrollView>
        </View>



{/* MARK YOU TAASK */}
<View
          style={s`flex flex-row  pr-2 pl-2 justify-between items-center  w-full h-12  mt-5 `}
        >
          <Text
            style={[s`text-gray-500 text-xl`, { fontFamily: "Outfit-Bold" , letterSpacing:-1}]}
          >
            Mark Tasks
          </Text>

          <Text
            style={[s`text-gray-400 text-lg`, { fontFamily: "Outfit-Light" }]}
          >
            check all
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles outside the component to keep the code clean and organized
const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff", // Set background color for safe area view
  },
  imageContainer: {
    position: "relative", // Makes the container for the image relative so we can position text over it
    width: "100%",
    height: "100%", // Takes full height from the parent container
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30, // Optional: add rounded corners to the image
    opacity: 0.2,
  },
  overlayTextContainer: {
    position: "absolute", // Position text absolutely inside the image container
    top: 50, // Adjust to move the text lower or higher
    left: 20, // Adjust left to control horizontal position
    right: 20,
    bottom: 20, // Optionally adjust the bottom to control vertical positioning
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background for text readability
    borderRadius: 30, // Optional: rounded corners for the text background
  },

  overlaySearchContainer: {
    position: "absolute", // Position text absolutely inside the image container
    top: 220, // Adjust to move the text lower or higher
    left: 20, // Adjust left to control horizontal position
    right: 20,
    bottom: 20, // Optionally adjust the bottom to control vertical positioning
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background for text readability
    borderRadius: 30, // Optional: rounded corners for the text background
    width: "full",
    height: 60,
    borderColor: "white",
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderRadius: 18,
    margin: 6,
  },
  text: {
    color: "white", // Text color
    fontSize: 24, // Adjust text size
    fontWeight: "bold", // Text style
    textAlign: "left", // Center the text
    marginTop: 50,
  },

  title: [
    s`text-red-400 text-xl`, // Tailwind styles
    { fontFamily: "Poppins-Bold" }, // Custom font family
  ],
  image: {
    width: "100%", // Adjust width as needed
    height: "100%", // Adjust height as needed
    borderRadius: 20, // Optionally add rounding to the image as well
  },

  searchContainer: s`
    flex-row items-center
    bg-Highlight pt-4 pl-3 pb-4
    rounded-xl mt-10 shadow-md
    ml-8 mr-8
  `,

  icon: s`mr-3 ml-3`,

  input: [
    s`flex-1 text-base text-gray-700`, // Tailwind styles
    { fontFamily: "Poppins-Medium" }, // Custom font family
  ],
};

export default HomeScreen;
