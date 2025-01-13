import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { s } from "react-native-wind";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const AddScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    try {
      // Request permissions
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const handleCreateTask = () => {
    // Handle task creation logic here
    console.log("Creating task:", { taskTitle, description, dueDate, image });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section with Background */}
      <View style={s`bg-primary w-full h-40 rounded-br-2xl rounded-bl-2xl`}>
        <View style={s`flex-row items-center justify-between px-6 pt-12`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[s`text-white text-2xl`, { fontFamily: "Outfit-Bold" }]}>
            Add New Task
          </Text>
          <View style={s`w-6`} /> {/* Empty view for spacing */}
        </View>
      </View>

      {/* Main Content */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={s`flex-1 w-full`}
      >
        <ScrollView style={s`px-6 pt-6`}>
          {/* Image Upload Section */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Add Image
            </Text>
            <TouchableOpacity 
              onPress={pickImage}
              style={s`bg-gray-100 rounded-xl p-4 items-center justify-center border-2 border-dashed border-gray-300`}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={s`w-full h-48 rounded-lg`}
                  resizeMode="cover"
                />
              ) : (
                <View style={s`items-center py-8`}>
                  <AntDesign name="camerao" size={40} color="#666" />
                  <Text style={[s`text-gray-500 mt-2`, { fontFamily: "Outfit-Medium" }]}>
                    Tap to upload image
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Task Title Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Task Title
            </Text>
            <TextInput
              style={[
                s`bg-gray-100 rounded-xl p-4 text-gray-800`,
                { fontFamily: "Outfit-Regular" }
              ]}
              placeholder="Enter task title"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
          </View>

          {/* Description Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Description
            </Text>
            <TextInput
              style={[
                s`bg-gray-100 rounded-xl p-4 h-32 text-gray-800`,
                { fontFamily: "Outfit-Regular" }
              ]}
              placeholder="Enter task description"
              multiline
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Due Date Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Due Date
            </Text>
            <TextInput
              style={[
                s`bg-gray-100 rounded-xl p-4 text-gray-800`,
                { fontFamily: "Outfit-Regular" }
              ]}
              placeholder="Select due date"
              value={dueDate}
              onChangeText={setDueDate}
            />
          </View>

          {/* Priority Selection */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Priority
            </Text>
            <View style={s`flex-row justify-between`}>
              {['Low', 'Medium', 'High'].map((priority) => (
                <TouchableOpacity 
                  key={priority}
                  style={s`bg-gray-100 rounded-xl py-3 px-8`}
                >
                  <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
                    {priority}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Tags Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-300 text-lg mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Tags
            </Text>
            <TextInput
              style={[
                s`bg-gray-100 rounded-xl p-4 text-gray-800`,
                { fontFamily: "Outfit-Regular" }
              ]}
              placeholder="Add tags (comma separated)"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Create Task Button */}
      <View style={s`px-6 pb-6`}>
        <TouchableOpacity 
          style={s`bg-primary rounded-xl py-4 items-center`}
          onPress={handleCreateTask}
        >
          <Text style={[s`text-white text-lg`, { fontFamily: "Outfit-Bold" }]}>
            Create Task
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
};

export default AddScreen;