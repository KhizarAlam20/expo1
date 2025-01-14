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
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login lo'gic here
    navigation.navigate("MainApp");
  };

  const handleSignup = () => {
    // Add your login lo'gic here
    navigation.navigate("SignUp");
  };

  const handleForget = () => {
    // Add your login lo'gic here
    navigation.navigate("ForgotPassword");
  };

  const handleSocialLogin = (platform) => {
    // Add your social login logic here
    console.log(`Logging in with ${platform}`);
  };

  return (
    <SafeAreaView style={s`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={s`flex-1`}
      >
        {/* Header with Logo */}
        <View style={s`items-center mt-12 mb-8`}>
          <Image
            source={require("../../assets/Image/lines.png")}
            style={s`w-20 h-20`}
          />
          <Text style={[s`text-2xl text-gray-800 mt-4`, { fontFamily: "Outfit-Bold" }]}>
            Welcome Back!
          </Text>
          <Text style={[s`text-gray-500 mt-2`, { fontFamily: "Outfit-Regular" }]}>
            Login to continue managing your tasks
          </Text>
        </View>

        {/* Social Login Options */}
        <View style={s`px-6 mb-8`}>
          <View style={s`flex-row justify-center space-x-4`}>
            <TouchableOpacity 
              style={s`bg-white border border-gray-200 rounded-xl p-4 flex-1 items-center flex-row justify-center`}
              onPress={() => handleSocialLogin('Google')}
            >
              <AntDesign name="google" size={20} color="#DB4437" />
              <Text style={[s`ml-2 text-gray-800`, { fontFamily: "Outfit-Medium" }]}>
                Google
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={s`bg-white border border-gray-200 rounded-xl p-4 flex-1 items-center flex-row justify-center`}
              onPress={() => handleSocialLogin('Apple')}
            >
              <AntDesign name="apple1" size={20} color="#000000" />
              <Text style={[s`ml-2 text-gray-800`, { fontFamily: "Outfit-Medium" }]}>
                Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={s`flex-row items-center mt-8`}>
            <View style={s`flex-1 h-0.5 bg-gray-200`} />
            <Text style={[s`mx-4 text-gray-500`, { fontFamily: "Outfit-Regular" }]}>
              or continue with
            </Text>
            <View style={s`flex-1 h-0.5 bg-gray-200`} />
          </View>
        </View>

        {/* Login Form */}
        <View style={s`px-6`}>
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
          <View style={s`mb-6`}>
            <Text style={[s`text-gray-700 mb-2`, { fontFamily: "Outfit-Medium" }]}>
              Password
            </Text>
            <View style={s`flex-row items-center bg-gray-100 rounded-xl px-4 py-3`}>
              <AntDesign name="lock" size={20} color="#666" />
              <TextInput
                style={[s`flex-1 ml-3 text-gray-800`, { fontFamily: "Outfit-Regular" }]}
                placeholder="Enter your password"
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

          {/* Forgot Password */}
          <TouchableOpacity 
            style={s`items-end mb-8`}
            onPress={handleForget}
          >
            <Text style={[s`text-primary`, { fontFamily: "Outfit-Medium" }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={s`bg-primary rounded-xl py-4 items-center`}
            onPress={handleLogin}
          >
            <Text style={[s`text-white text-lg`, { fontFamily: "Outfit-Bold" }]}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={s`flex-row justify-center mt-8`}>
            <Text style={[s`text-gray-600`, { fontFamily: "Outfit-Regular" }]}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={[s`text-primary`, { fontFamily: "Outfit-Medium" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;