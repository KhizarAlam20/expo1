import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { s } from "react-native-wind";
import { AntDesign } from "@expo/vector-icons";
// import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  // Mock user data - you can replace this with your actual user data
  const userData = {
    name: "Khizar",
    email: "khizar@example.com",
    totalTasks: 20,
    completedTasks: 15,
  };

  const DrawerItem = ({ icon, label, onPress, isActive = false }) => (
    <TouchableOpacity
      style={s`flex-row items-center px-4 py-3 mb-2 rounded-xl ${isActive ? 'bg-primary' : ''}`}
      onPress={onPress}
    >
      <AntDesign 
        name={icon} 
        size={24} 
        color={isActive ? "white" : "#666"} 
      />
      <Text 
        style={[
          s`ml-3 ${isActive ? 'text-white' : 'text-gray-700'}`,
          { fontFamily: "Outfit-Medium" }
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={s`flex-1`}>
      <ScrollView style={s`flex-1 bg-white`}>
        {/* User Profile Section */}
        <View style={s`p-6 border-b border-gray-100`}>
          <Image
            source={require("../../assets/Image/lines.png")}
            style={s`w-20 h-20 rounded-full bg-primary/10 mb-4`}
          />
          <Text style={[s`text-xl text-gray-800`, { fontFamily: "Outfit-Bold" }]}>
            {userData.name}
          </Text>
          <Text style={[s`text-gray-500 mt-1`, { fontFamily: "Outfit-Regular" }]}>
            {userData.email}
          </Text>
        </View>

        {/* Task Statistics */}
        <View style={s`flex-row justify-between px-6 py-4 bg-gray-50`}>
          <View>
            <Text style={[s`text-gray-500`, { fontFamily: "Outfit-Regular" }]}>
              Total Tasks
            </Text>
            <Text style={[s`text-xl text-gray-800`, { fontFamily: "Outfit-Bold" }]}>
              {userData.totalTasks}
            </Text>
          </View>
          <View>
            <Text style={[s`text-gray-500`, { fontFamily: "Outfit-Regular" }]}>
              Completed
            </Text>
            <Text style={[s`text-xl text-gray-800`, { fontFamily: "Outfit-Bold" }]}>
              {userData.completedTasks}
            </Text>
          </View>
        </View>

        {/* Navigation Items */}
        <View style={s`p-4`}>
          <DrawerItem
            icon="home"
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
            isActive={true}
          />
          <DrawerItem
            icon="calendar"
            label="Calendar"
            onPress={() => props.navigation.navigate('Calendar')}
          />
          <DrawerItem
            icon="star"
            label="Important"
            onPress={() => props.navigation.navigate('Important')}
          />
          <DrawerItem
            icon="notification"
            label="Notifications"
            onPress={() => props.navigation.navigate('Notifications')}
          />
          <DrawerItem
            icon="setting"
            label="Settings"
            onPress={() => props.navigation.navigate('Settings')}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={s`mx-4 mt-8 p-4 rounded-xl border border-red-200`}
          onPress={() => {
            // Add your logout logic here
            props.navigation.closeDrawer();
          }}
        >
          <View style={s`flex-row items-center`}>
            <AntDesign name="logout" size={24} color="#EF4444" />
            <Text 
              style={[
                s`ml-3 text-red-500`,
                { fontFamily: "Outfit-Medium" }
              ]}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;