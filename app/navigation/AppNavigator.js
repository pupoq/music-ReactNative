import React from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Music from '../screens/Music';
import Player from '../screens/Player';
import FavouriteMusic from '../screens/FavouriteMusic';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
   <Tab.Navigator initialRouteName='Player' style={styles.container}>
    <Tab.Screen name='Music' component={Music} options={{
      tabBarIcon: ({size, color}) => (
        <Feather name='music' size={size} color={color}></Feather>
      )
    }}/>
    <Tab.Screen name='Player' component={Player} options={{
      tabBarIcon: ({size, color}) => (
        <AntDesign name='playcircleo' size={size} color={color}></AntDesign>
      )
    }}/>
    <Tab.Screen name='Favorite Music' component={FavouriteMusic} options={{
      tabBarIcon: ({size, color}) => (
        <Entypo name='heart-outlined' size={size} color={color}></Entypo>
      )
    }}/>
   </Tab.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({
  container: {
    height: 200
  }
})