import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { s } from 'react-native-wind';  // Importing 's' from 'react-native-wind'
import AntDesign from "@expo/vector-icons/AntDesign";
// import { SearchBar } from 'react-native-screens';

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="search here..."
          placeholderTextColor="gray"
        />
        <View style={styles.iconContainer}>
          <AntDesign name="search1" size={20} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    position: 'relative', 
    width: '85%',
    height: 60,
    marginBottom: 10,
    marginTop:250
  },

  textInput: {
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'Outfit-Light',
    borderRadius: 18,
    backgroundColor: '#f2f2f2',
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#fff', 
    
  },

  iconContainer: {
    position: 'absolute',  
    right: 10,             
    top: '30%',            
    transform: [{ translateY: -10 }],  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232222',
    padding: 10,
    borderRadius: 14,
  },
});
