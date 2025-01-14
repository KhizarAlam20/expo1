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

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Add your password reset logic here
    // After sending reset email, navigate back or to confirmation screen
    navigation.goBack();
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
            Forgot Password?
          </Text>
          <Text 
            style={[s`text-gray-500 mt-2 text-center px-8`, { fontFamily: "Outfit-Regular" }]}
          >
            Enter your email address to receive a password reset link
          </Text>
        </View>

        {/* Reset Password Form */}
        <View style={s`px-6 mt-8`}>
          {/* Email Input */}
          <View style={s`mb-8`}>
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

          {/* Reset Password Button */}
          <TouchableOpacity
            style={s`bg-primary rounded-xl py-4 items-center`}
            onPress={handleResetPassword}
          >
            <Text style={[s`text-white text-lg`, { fontFamily: "Outfit-Bold" }]}>
              Send Reset Link
            </Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <TouchableOpacity 
            style={s`items-center mt-8`}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[s`text-primary`, { fontFamily: "Outfit-Medium" }]}>
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;