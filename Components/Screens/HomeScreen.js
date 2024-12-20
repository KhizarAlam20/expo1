import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";

// HomeScreen component
const HomeScreen = () => {
  // Function to handle search icon click
  const handleSearchClick = () => {
    console.log("Search icon clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={s`bg-primary w-full h-1/4 rounded-br-3xl rounded-bl-3xl`}>
        {/* Image in the background */}
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/Image/lines.png')} style={styles.image} />
          
          {/* Text over the image */}
          <View style={styles.overlayTextContainer}>
            <Text style={styles.text}>Your Text Here</Text>
          </View>
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
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set background color for safe area view
  },
  imageContainer: {
    position: 'relative',  // Makes the container for the image relative so we can position text over it
    width: '100%',
    height: '100%', // Takes full height from the parent container
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Optional: add rounded corners to the image
  },
  overlayTextContainer: {
    position: 'absolute',  // Position text absolutely inside the image container
    top: 20,  // Adjust to move the text lower or higher
    left: 20, // Adjust left to control horizontal position
    right: 20,
    bottom: 20,  // Optionally adjust the bottom to control vertical positioning
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background for text readability
    borderRadius: 10, // Optional: rounded corners for the text background
  },
  text: {
    color: 'white',  // Text color
    fontSize: 24,  // Adjust text size
    fontWeight: 'bold',  // Text style
    textAlign: 'left', // Center the text
  },
  
  title: [
    s`text-red-400 text-xl`, // Tailwind styles
    { fontFamily: "Poppins-Bold" }, // Custom font family
  ],
  image: {
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
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
