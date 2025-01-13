import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { s } from "react-native-wind";
import { AntDesign } from "@expo/vector-icons";

const FavoritesScreen = ({ navigation }) => {
  // Mock favorite tasks data
  const favoriteTasks = [
    {
      id: 1,
      title: "Website Redesign",
      description: "Update the company website with new brand guidelines",
      dueDate: "25 Jan 2025",
      priority: "High",
      image: null,
      tags: ["Design", "Web"],
      progress: 75,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Develop new features for the mobile application",
      dueDate: "30 Jan 2025",
      priority: "Medium",
      image: null,
      tags: ["Mobile", "Development"],
      progress: 45,
    },
    {
      id: 3,
      title: "Content Strategy",
      description: "Create content calendar for Q1 2025",
      dueDate: "15 Jan 2025",
      priority: "Low",
      image: null,
      tags: ["Marketing", "Content"],
      progress: 90,
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-600';
      case 'medium':
        return 'bg-orange-100 text-orange-600';
      case 'low':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const TaskCard = ({ task }) => (
    <TouchableOpacity 
      style={s`bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100`}
      onPress={() => console.log('Task pressed:', task.id)}
    >
      <View style={s`flex-row justify-between items-start`}>
        <View style={s`flex-1`}>
          <Text style={[s`text-lg text-gray-800`, { fontFamily: "Outfit-Bold" }]}>
            {task.title}
          </Text>
          <Text 
            style={[s`text-gray-500 mt-1`, { fontFamily: "Outfit-Regular" }]}
            numberOfLines={2}
          >
            {task.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('Remove from favorites:', task.id)}
        >
          <AntDesign name="heart" size={24} color="#FF4B4B" />
        </TouchableOpacity>
      </View>

      {task.image && (
        <Image
          source={{ uri: task.image }}
          style={s`w-full h-40 rounded-lg mt-3`}
          resizeMode="cover"
        />
      )}

      <View style={s`flex-row flex-wrap mt-3`}>
        {task.tags.map((tag, index) => (
          <View 
            key={index} 
            style={s`bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2`}
          >
            <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>

      <View style={s`flex-row justify-between items-center mt-3`}>
        <View style={s`flex-row items-center`}>
          <AntDesign name="calendar" size={16} color="#666" />
          <Text style={[s`ml-2 text-gray-500`, { fontFamily: "Outfit-Medium" }]}>
            {task.dueDate}
          </Text>
        </View>

        <View style={s`flex-row items-center`}>
          <View style={s`${getPriorityColor(task.priority)} rounded-full px-3 py-1`}>
            <Text style={[s`text-sm`, { fontFamily: "Outfit-Medium" }]}>
              {task.priority}
            </Text>
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={s`mt-4`}>
        <View style={s`flex-row justify-between items-center mb-2`}>
          <Text style={[s`text-gray-500`, { fontFamily: "Outfit-Medium" }]}>
            Progress
          </Text>
          <Text style={[s`text-gray-500`, { fontFamily: "Outfit-Medium" }]}>
            {task.progress}%
          </Text>
        </View>
        <View style={s`bg-gray-200 h-2 rounded-full`}>
          <View 
            style={[
              s`bg-primary h-2 rounded-full`,
              { width: `${task.progress}%` }
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={s`bg-primary w-full h-40 rounded-br-2xl rounded-bl-2xl`}>
        <View style={s`flex-row items-center justify-between px-6 pt-12`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[s`text-white text-2xl`, { fontFamily: "Outfit-Bold" }]}>
            Favorites
          </Text>
          <View style={s`w-6`} /> {/* Empty view for spacing */}
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={s`flex-1 px-6 pt-6`}>
        {favoriteTasks.length > 0 ? (
          favoriteTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <View style={s`items-center justify-center mt-12`}>
            <AntDesign name="hearto" size={48} color="#666" />
            <Text style={[s`text-gray-500 mt-4 text-lg text-center`, { fontFamily: "Outfit-Medium" }]}>
              No favorite tasks yet{'\n'}
              Tasks you mark as favorite will appear here
            </Text>
          </View>
        )}
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

export default FavoritesScreen;