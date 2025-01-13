import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { s } from "react-native-wind";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock user data
  const userData = {
    name: "Khizar",
    tasksToday: 5,
    completedToday: 3,
  };

  const TaskProgressCard = () => (
    <View style={s`bg-primary/10 rounded-2xl p-4 mb-6`}>
      <View style={s`flex-row justify-between items-center mb-4`}>
        <View>
          <Text style={[s`text-gray-600 text-base`, { fontFamily: "Outfit-Medium" }]}>
            Daily Progress
          </Text>
          <Text style={[s`text-gray-800 text-2xl mt-1`, { fontFamily: "Outfit-Bold" }]}>
            {userData.completedToday}/{userData.tasksToday} Tasks
          </Text>
        </View>
        <View style={s`bg-primary rounded-xl p-2`}>
          <AntDesign name="barschart" size={24} color="white" />
        </View>
      </View>
      <View style={s`bg-gray-200 h-2 rounded-full`}>
        <View 
          style={[
            s`bg-primary h-2 rounded-full`,
            { width: `${(userData.completedToday / userData.tasksToday) * 100}%` }
          ]}
        />
      </View>
    </View>
  );

  const CategoryButton = ({ icon, label, count, isActive }) => (
    <TouchableOpacity 
      style={s`items-center mr-4 bg-${isActive ? 'primary' : 'gray-100'} rounded-xl p-3 w-24`}
    >
      {icon}
      <Text 
        style={[
          s`mt-2 ${isActive ? 'text-white' : 'text-gray-600'}`,
          { fontFamily: "Outfit-Medium" }
        ]}
      >
        {label}
      </Text>
      <Text 
        style={[
          s`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`,
          { fontFamily: "Outfit-Regular" }
        ]}
      >
        {count} tasks
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={s`bg-primary w-full h-48 rounded-br-3xl rounded-bl-3xl px-6`}>
        <View style={s`flex-row justify-between items-center mt-12`}>
          <TouchableOpacity>
            <AntDesign name="menu-fold" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require("../../assets/Image/lines.png")}
              style={s`w-12 h-12 rounded-full bg-white/20`}
            />
          </TouchableOpacity>
        </View>

        <View style={s`mt-6`}>
          <Text style={[s`text-white/60 text-base`, { fontFamily: "Outfit-Regular" }]}>
            Hello,
          </Text>
          <Text style={[s`text-white text-2xl mt-1`, { fontFamily: "Outfit-Bold" }]}>
            {userData.name}! 👋
          </Text>
        </View>
      </View>

      {/* Search Bar - Positioned to overlap with header */}
      <View style={s`px-6 -mt-6`}>
        <View style={s`bg-white rounded-xl shadow-sm flex-row items-center px-4 py-3`}>
          <AntDesign name="search1" size={20} color="#666" />
          <TextInput
            style={[s`flex-1 ml-3 text-gray-800`, { fontFamily: "Outfit-Regular" }]}
            placeholder="Search tasks..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={s`flex-1 px-6`} showsVerticalScrollIndicator={false}>
        {/* Progress Card */}
        <View style={s`mt-6`}>
          <TaskProgressCard />
        </View>

        {/* Categories */}
        <View style={s`mt-2`}>
          <Text style={[s`text-gray-800 text-xl mb-4`, { fontFamily: "Outfit-Bold" }]}>
            Categories
          </Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={s`mb-6`}
          >
            <CategoryButton
              icon={<AntDesign name="clockcircle" size={24} color="white" />}
              label="Today"
              count="5"
              isActive={true}
            />
            <CategoryButton
              icon={<AntDesign name="star" size={24} color="#666" />}
              label="Important"
              count="3"
              isActive={false}
            />
            <CategoryButton
              icon={<AntDesign name="calendar" size={24} color="#666" />}
              label="Planned"
              count="12"
              isActive={false}
            />
          </ScrollView>
        </View>

        {/* Recent Tasks */}
        <View style={s`mt-2`}>
          <View style={s`flex-row justify-between items-center mb-4`}>
            <Text style={[s`text-gray-800 text-xl`, { fontFamily: "Outfit-Bold" }]}>
              Recent Tasks
            </Text>
            <TouchableOpacity>
              <Text style={[s`text-primary`, { fontFamily: "Outfit-Medium" }]}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Task Cards */}
          {[1, 2, 3].map((index) => (
            <TouchableOpacity
              key={index}
              style={s`bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100`}
            >
              <View style={s`flex-row justify-between items-start`}>
                <View style={s`flex-1`}>
                  <Text style={[s`text-gray-800 text-lg`, { fontFamily: "Outfit-Bold" }]}>
                    Mobile App Design
                  </Text>
                  <Text 
                    style={[s`text-gray-500 mt-1`, { fontFamily: "Outfit-Regular" }]}
                    numberOfLines={2}
                  >
                    Create wireframes for the new mobile app interface
                  </Text>
                </View>
                <View style={s`bg-primary/10 rounded-lg p-2`}>
                  <AntDesign name="right" size={20} color="#666" />
                </View>
              </View>

              <View style={s`flex-row justify-between items-center mt-4`}>
                <View style={s`flex-row items-center`}>
                  <AntDesign name="clockcircle" size={16} color="#666" />
                  <Text style={[s`ml-2 text-gray-500`, { fontFamily: "Outfit-Medium" }]}>
                    2:30 PM
                  </Text>
                </View>
                <View style={s`bg-orange-100 rounded-full px-3 py-1`}>
                  <Text style={[s`text-orange-600`, { fontFamily: "Outfit-Medium" }]}>
                    In Progress
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={s`absolute bottom-8 right-6 bg-primary w-14 h-14 rounded-full items-center justify-center shadow-lg`}
        onPress={() => navigation.navigate('AddTask')}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
};

export default HomeScreen;