import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {s} from "react-native-wind"

const TaskList = () => {
  return (
    <SafeAreaView  style={styles.container}>
         <Text style={[s`text-red-400 text-xl`, { fontFamily: 'Poppins-Bold' }]}>Dash</Text>
       </SafeAreaView>
  )
}

export default TaskList

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",  // Fixed camelCase
    alignItems: "center",       // Fixed camelCase
  },
})