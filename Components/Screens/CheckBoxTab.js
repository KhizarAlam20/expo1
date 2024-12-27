import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import React from 'react'
import { s } from 'react-native-wind'

const CheckBoxTab = () => {
  return (
    <View
          style={s`flex flex-row bg-Highlight mr-3 pr-2 pl-2 items-center mb-3  w-full h-12 rounded-xl `}
        >
          <View style={s`w-6 h-6 border rounded-lg`}>

          </View>

          <Text
            style={[s`text-gray-300 text-lg`, { fontFamily: "Outfit-Light" }]}
          >
            check all
          </Text>
        </View>
  )
}

export default CheckBoxTab

const styles = StyleSheet.create({})