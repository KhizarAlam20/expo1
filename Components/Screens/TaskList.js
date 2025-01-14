import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal
} from 'react-native';
import { s } from "react-native-wind";
import { AntDesign } from "@expo/vector-icons";

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Mobile App Design',
      description: 'Create wireframes for the new mobile app interface',
      dueTime: '2:30 PM',
      status: 'in-progress',
      progress: 60,
      isFavorite: false,
      priority: 'high',
      category: 'Design'
    },
    {
      id: '2',
      title: 'API Integration',
      description: 'Implement REST API endpoints for user authentication',
      dueTime: '4:00 PM',
      status: 'todo',
      progress: 0,
      isFavorite: true,
      priority: 'medium',
      category: 'Development'
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-600',
      medium: 'bg-orange-100 text-orange-600',
      low: 'bg-green-100 text-green-600'
    };
    return colors[priority] || colors.medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      'completed': 'bg-green-100 text-green-600',
      'in-progress': 'bg-orange-100 text-orange-600',
      'todo': 'bg-gray-100 text-gray-600'
    };
    return colors[status] || colors.todo;
  };

  const toggleFavorite = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, isFavorite: !task.isFavorite} : task
    ));
  };

  const updateProgress = (taskId, newProgress) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const status = newProgress >= 100 ? 'completed' : 
                      newProgress > 0 ? 'in-progress' : 'todo';
        return {...task, progress: newProgress, status};
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const TaskCard = ({ task }) => (
    <View style={s`bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100`}>
      {/* Header */}
      <View style={s`flex-row justify-between items-start`}>
        <View style={s`flex-1`}>
          <Text style={[s`text-gray-800 text-lg`, { fontFamily: "Outfit-Bold" }]}>
            {task.title}
          </Text>
          <Text style={[s`text-gray-500 mt-1`, { fontFamily: "Outfit-Regular" }]}>
            {task.description}
          </Text>
        </View>
        <View style={s`flex-row`}>
          <TouchableOpacity 
            onPress={() => toggleFavorite(task.id)}
            style={s`mr-2`}
          >
            <AntDesign 
              name={task.isFavorite ? "star" : "staro"} 
              size={24} 
              color={task.isFavorite ? "#FFD700" : "#666"} 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              setEditingTask(task);
              setIsEditModalVisible(true);
            }}
          >
            <AntDesign name="edit" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={s`mt-4`}>
        <View style={s`flex-row justify-between items-center mb-2`}>
          <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
            Progress
          </Text>
          <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
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

      {/* Footer */}
      <View style={s`flex-row justify-between items-center mt-4`}>
        <View style={s`flex-row items-center`}>
          <AntDesign name="clockcircle" size={16} color="#666" />
          <Text style={[s`ml-2 text-gray-500`, { fontFamily: "Outfit-Medium" }]}>
            {task.dueTime}
          </Text>
        </View>
        
        <View style={s`flex-row`}>
          <View style={s`${getStatusColor(task.status)} rounded-full px-3 py-1 mr-2`}>
            <Text style={[{ fontFamily: "Outfit-Medium" }]}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </Text>
          </View>
          
          <View style={s`${getPriorityColor(task.priority)} rounded-full px-3 py-1`}>
            <Text style={[{ fontFamily: "Outfit-Medium" }]}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={s`flex-row justify-between mt-4 pt-4 border-t border-gray-100`}>
        <TouchableOpacity 
          style={s`flex-row items-center`}
          onPress={() => updateProgress(task.id, Math.min(task.progress + 20, 100))}
        >
          <AntDesign name="plus" size={16} color="#666" />
          <Text style={[s`ml-2 text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
            Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={s`flex-row items-center`}
          onPress={() => updateProgress(task.id, 100)}
        >
          <AntDesign name="check" size={16} color="#666" />
          <Text style={[s`ml-2 text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
            Complete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={s`flex-row items-center`}
          onPress={() => deleteTask(task.id)}
        >
          <AntDesign name="delete" size={16} color="#666" />
          <Text style={[s`ml-2 text-gray-600`, { fontFamily: "Outfit-Medium" }]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={s`flex-1 bg-white`}>
      {/* Header */}
      <View style={s`bg-primary p-6 rounded-bl-3xl rounded-br-3xl`}>
        <View style={s`flex-row justify-between items-center mt-6`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[s`text-white text-xl`, { fontFamily: "Outfit-Bold" }]}>
            All Tasks
          </Text>
          <View style={s`w-6`} /> {/* Placeholder for symmetry */}
        </View>
      </View>

      {/* Search and Filters */}
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

      {/* Status Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={s`px-6 mt-4`}
      >
        {['all', 'todo', 'in-progress', 'completed'].map((status) => (
          <TouchableOpacity
            key={status}
            style={s`mr-4 bg-${filterStatus === status ? 'primary' : 'gray-100'} 
                    rounded-full px-4 py-2`}
            onPress={() => setFilterStatus(status)}
          >
            <Text
              style={[
                s`${filterStatus === status ? 'text-white' : 'text-gray-600'}`,
                { fontFamily: "Outfit-Medium" }
              ]}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Task List */}
      <ScrollView 
        style={s`flex-1 px-6 mt-4`}
        showsVerticalScrollIndicator={false}
      >
        {tasks
          .filter(task => 
            (filterStatus === 'all' || task.status === filterStatus) &&
            (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             task.description.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        }
      </ScrollView>

      {/* Edit Task Modal */}
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={s`flex-1 justify-end`}>
          <View style={s`bg-white rounded-t-3xl p-6 shadow-lg`}>
            <Text style={[s`text-xl text-gray-800 mb-4`, { fontFamily: "Outfit-Bold" }]}>
              Edit Task
            </Text>
            {/* Add your edit form components here */}
            <TouchableOpacity 
              style={s`bg-primary rounded-xl p-4 mt-4`}
              onPress={() => setIsEditModalVisible(false)}
            >
              <Text style={[s`text-white text-center`, { fontFamily: "Outfit-Medium" }]}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TaskList;