import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { s } from 'react-native-wind';  // Importing 's' from 'react-native-wind'

const AddScreen = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <Text style={[s`text-red-400 text-xl`, { fontFamily: 'Poppins-Bold' }]}>Dash</Text>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles={
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",  // Fixed camelCase
    alignItems: "center",       // Fixed camelCase
  },
}