// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Animated, { Easing, withTiming, useSharedValue, withSpring } from 'react-native-reanimated';
// import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

// // Get screen width and height
// const { width, height } = Dimensions.get('window');

// const Drawer = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const translateX = useSharedValue(-width); // Start off-screen

//   // Handle drawer toggle (open and close)
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState);
//     translateX.value = withTiming(isOpen ? -width : 0, {
//       duration: 300,
//       easing: Easing.inOut(Easing.ease),
//     });
//   };

//   // Gesture handling
//   const gestureHandler = (event) => {
//     // For manual control of the drawer's position during drag
//     translateX.value = event.translationX + (isOpen ? 0 : -width);
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       {/* Drawer content */}
//       <PanGestureHandler onGestureEvent={gestureHandler}>
//         <Animated.View style={[styles.drawer, { transform: [{ translateX: translateX.value }] }]}>
//           <View style={styles.drawerContent}>
//             <Text style={styles.drawerText}>Drawer Content</Text>
//           </View>
//         </Animated.View>
//       </PanGestureHandler>

//       {/* Main content */}
//       <View style={styles.mainContent}>
//         <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
//           <Text style={styles.buttonText}>Open Drawer</Text>
//         </TouchableOpacity>
//         <Text style={styles.mainText}>Main Content</Text>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   drawer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     width: width, // Full screen width
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     zIndex: 1,
//   },
//   drawerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   drawerText: {
//     color: 'white',
//     fontSize: 24,
//   },
//   mainContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   drawerButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   mainText: {
//     fontSize: 24,
//     color: '#333',
//   },
// });

// export default Drawer;
