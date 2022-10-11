import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const {width} = Dimensions.get('window');

const MusicItem = ({item}) => {
  const {title, artist, duration} = item;

  return (
    <Pressable style={({pressed}) => [
        {
          backgroundColor: pressed
          ? '#555555'
          : '#127bfc'
        },
        styles.container
      ]}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <Feather name='play' size={24} color='white' />
        </View>
        <View style={styles.namesWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </Pressable>
  )
}

export default MusicItem

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: -0.3,
    borderColor: 'white',
    borderWidth: 4
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  artist: {
    color: 'black'
  },
  rightContainer: {

  },
  duration: {
    color: 'white',
    position: "relative",
    right: 10
  }
})