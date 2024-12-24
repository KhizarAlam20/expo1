import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'; // Fixed import
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import Entypo from '@expo/vector-icons/Entypo';
import {s} from 'react-native-wind'
import './wind.config.ts'
import HomeScreen from './Components/Screens/HomeScreen.js';
import SearchScreen from './Components/Screens/SearchScreen.js';
import AddScreen from './Components/Screens/AddScreen.js';
import FavoritesScreen from './Components/Screens/FavoritesScreen.js';
import ProfileScreen from './Components/Screens/ProfileScreen.js';

// Import the necessary font files
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from './assets/svgnew/HomeIcon.js';
import Add from './assets/svgnew/Add.js';
import Home from './assets/svgnew/Home.js';
import Heart from './assets/Svg/Heart.js';
import Profile from './assets/svgnew/Profile.js';
import Vector from './assets/svgnew/Vector.js';
import TaskList from './Components/Screens/TaskList.js';
import List from './assets/svgnew/List.js';
import Fav from './assets/svgnew/Fav.js';
import Circle from './assets/svgnew/CircleIcon.js';
import CircleIcon from './assets/svgnew/CircleIcon.js';
// import { Circle } from 'react-native-svg';

const Tab = createBottomTabNavigator(); // Initialize the Tab Navigator




export default function App() {
  const [fontLoaded] = useFonts({
    'Outfit-Medium': require('./Fonts/Outfit/Outfit-Medium.ttf'),
   'Outfit-Bold': require('./Fonts/Outfit/Outfit-Bold.ttf'),
   'Outfit-Light': require('./Fonts/Outfit/Outfit-Light.ttf'),
   'Outfit-Regular': require('./Fonts/Outfit/Outfit-Regular.ttf'),
   'Outfit-Thin': require('./Fonts/Outfit/Outfit-Thin.ttf'),
   'Outfit-ExtraBold': require('./Fonts/Outfit/Outfit-ExtraBold.ttf'),


  });

  if (!fontLoaded) {
    return null; // Optionally, you could show a loading spinner here
  }

  return (
    <NavigationContainer 
     
    >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#f2f2f2', // Tab bar background color
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 0,
            shadowOpacity: 0, // Remove shadow
            elevation: 0, // Remove elevation (Android shadow)
            borderTopWidth: 0, // Remove border at the top
            borderBottomWidth: 0, // Remove border at the bottom
            position: 'absolute', // Position the tab bar at the bottom
            left: 0,
            right: 0,
            bottom: 0, // Position it at the bottom of the screen
height:90,


          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#adadad',
          tabBarLabel: () => null, // Hide titles for all screens
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center' }}>
                {focused ? (<Home color={"#232222"}/>):(<Home color={"#AAA4A4"}/>)}
                {focused && <CircleIcon left={6}/>} 
              </View>
            ),
            headerShown: false,
          }}
        />
      
      <Tab.Screen
          name="Tasklist"
          component={TaskList}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center' }}>
               {focused ? (<List color={"#232222"}/>):(<List color={"#AAA4A4"}/>)}
               {focused && <CircleIcon left={6}/>} 
            </View>
              // <HomeIcon/>
              // <Entypo name="home"  size={28} color={color} />
                
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
      
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              // <MaterialIcons name="add" size={36} color={color} />
              <Add/>
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              // <Ionicons name="heart" size={28} color={color} />
              <View style={{ alignItems: 'center' }}>
                {focused ? (<Fav color={"#232222"}/>):(<Fav color={"#AAA4A4"}/>)}
               {focused && <CircleIcon left={6}/>} 
           </View>
            
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: 'center' }}>
              {focused ? (<Profile colors={"#232222"}/>):(<Profile colors={"#AAA4A4"}/>)}
            {focused && <CircleIcon left={9}/>} 
          </View>

              


            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
