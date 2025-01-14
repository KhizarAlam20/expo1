import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { s } from "react-native-wind";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Add your signup logic here
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={s`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={s`flex-1`}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={s`absolute left-6 top-12 z-10`}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#666" />
        </TouchableOpacity>

        {/* Header with Logo */}
        <View style={s`items-center mt-12 mb-8`}>
          <Image
            source={require("../../assets/Image/lines.png")}
            style={s`w-20 h-20`}
          />
          <Text style={[s`text-2xl text-gray-800 mt-4`, { fontFamily: "Outfit-Bold" }]}>
            Create Account
          </Text>
          <Text style={[s`text-gray-500 mt-2`, { fontFamily: "Outfit-Regular" }]}>
            Sign up to start managing your tasks
          </Text>
        </View>

        {/* Sign Up Form */}
        <View style={s`px-6 mt-8`}>
          {/* Full Name Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-700 mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Full Name
            </Text>
            <View style={s`flex-row items-center bg-gray-100 rounded-xl px-4 py-3`}>
              <AntDesign name="user" size={20} color="#666" />
              <TextInput
                style={[s`flex-1 ml-3 text-gray-800`, { fontFamily: "Outfit-Regular" }]}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

          {/* Email Input */}
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-700 mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Email
            </Text>
            <View style={s`flex-row items-center bg-gray-100 rounded-xl px-4 py-3`}>
              <AntDesign name="mail" size={20} color="#666" />
              <TextInput
                style={[s`flex-1 ml-3 text-gray-800`, { fontFamily: "Outfit-Regular" }]}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={s`mb-8`}>
            <Text style={[s`text-gray-700 mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Password
            </Text>
            <View style={s`flex-row items-center bg-gray-100 rounded-xl px-4 py-3`}>
              <AntDesign name="lock" size={20} color="#666" />
              <TextInput
                style={[s`flex-1 ml-3 text-gray-800`, { fontFamily: "Outfit-Regular" }]}
                placeholder="Choose a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <AntDesign 
                  name={showPassword ? "eye" : "eyeo"} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={s`bg-primary rounded-xl py-4 items-center`}
            onPress={handleSignUp}
          >
            <Text style={[s`text-white text-lg`, { fontFamily: "Outfit-Bold" }]}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={s`flex-row justify-center mt-8`}>
            <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Regular" }]}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[s`text-primary`, { fontFamily: "Outfit-Medium" }]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;