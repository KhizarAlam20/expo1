import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { s } from "react-native-wind";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Mock user data
  const userData = {
    name: "Khizar Ahmed",
    email: "khizar@example.com",
    joinedDate: "December 2024",
    tasksCompleted: 248,
    tasksInProgress: 5,
    totalProjects: 12,
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const StatisticBox = ({ title, value }) => (
    <View style={s`bg-gray-100 rounded-xl p-4 items-center flex-1 mx-2`}>
      <Text style={[s`text-gray-400 text-sm`, { fontFamily: "Outfit-Medium" }]}>
        {title}
      </Text>
      <Text style={[s`text-gray-800 text-xl mt-1`, { fontFamily: "Outfit-Bold" }]}>
        {value}
      </Text>
    </View>
  );

  const SettingItem = ({ icon, title, value, onPress, isSwitch }) => (
    <TouchableOpacity 
      style={s`flex-row items-center justify-between py-4 border-b border-gray-200`}
      onPress={onPress}
    >
      <View style={s`flex-row items-center`}>
        {icon}
        <Text style={[s`text-gray-800 text-lg ml-3`, { fontFamily: "Outfit-Medium" }]}>
          {title}
        </Text>
      </View>
      {isSwitch ? (
        <Switch value={value} onValueChange={onPress} />
      ) : (
        <AntDesign name="right" size={20} color="#666" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={s`bg-primary w-full h-72 rounded-br-2xl rounded-bl-2xl`}>
        <View style={s`flex-row items-center justify-between px-6 pt-12`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[s`text-white text-2xl`, { fontFamily: "Outfit-Bold" }]}>
            Profile
          </Text>
          <TouchableOpacity>
            <AntDesign name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Image and Basic Info */}
        <View style={s`items-center mt-6`}>
          <TouchableOpacity onPress={pickImage} style={s`relative`}>
            <View style={s`w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white`}>
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={s`w-full h-full`}
                  resizeMode="cover"
                />
              ) : (
                <View style={s`w-full h-full items-center justify-center`}>
                  <AntDesign name="user" size={40} color="#666" />
                </View>
              )}
            </View>
            <View style={s`absolute bottom-0 right-0 bg-primary rounded-full p-2 border-2 border-white`}>
              <AntDesign name="camerao" size={16} color="white" />
            </View>
          </TouchableOpacity>
          
          <Text style={[s`text-white text-2xl mt-4`, { fontFamily: "Outfit-Bold" }]}>
            {userData.name}
          </Text>
          <Text style={[s`text-gray-300 text-base`, { fontFamily: "Outfit-Medium" }]}>
            {userData.email}
          </Text>
          <Text style={[s`text-gray-300 text-sm mt-1`, { fontFamily: "Outfit-Light" }]}>
            Member since {userData.joinedDate}
          </Text>
        </View>
      </View>

      <ScrollView style={s`flex-1 px-6`}>
        {/* Statistics */}
        <View style={s`flex-row justify-between mt-6 mb-8`}>
          <StatisticBox title="Completed" value={userData.tasksCompleted} />
          <StatisticBox title="In Progress" value={userData.tasksInProgress} />
          <StatisticBox title="Projects" value={userData.totalProjects} />
        </View>

        {/* Settings Section */}
        <View style={s`bg-white rounded-xl p-4 shadow-sm mb-6`}>
          <Text style={[s`text-gray-400 text-lg mb-2`, { fontFamily: "Outfit-Bold" }]}>
            Settings
          </Text>

          <SettingItem
            icon={<Ionicons name="notifications-outline" size={24} color="#666" />}
            title="Notifications"
            value={notificationsEnabled}
            onPress={() => setNotificationsEnabled(!notificationsEnabled)}
            isSwitch
          />

          <SettingItem
            icon={<Ionicons name="moon-outline" size={24} color="#666" />}
            title="Dark Mode"
            value={darkMode}
            onPress={() => setDarkMode(!darkMode)}
            isSwitch
          />

          <SettingItem
            icon={<MaterialIcons name="language" size={24} color="#666" />}
            title="Language"
            onPress={() => {}}
          />

          <SettingItem
            icon={<MaterialIcons name="security" size={24} color="#666" />}
            title="Privacy"
            onPress={() => {}}
          />

          <SettingItem
            icon={<MaterialIcons name="help-outline" size={24} color="#666" />}
            title="Help & Support"
            onPress={() => {}}
          />
        </View>

        {/* Danger Zone */}
        <View style={s`mb-8`}>
          <TouchableOpacity 
            style={s`flex-row items-center justify-center py-4 bg-red-50 rounded-xl`}
          >
            <MaterialIcons name="logout" size={24} color="#EF4444" />
            <Text style={[s`text-red-500 text-lg ml-2`, { fontFamily: "Outfit-Medium" }]}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
};

export default ProfileScreen;