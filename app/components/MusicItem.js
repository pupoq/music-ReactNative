import { View, Text, Pressable, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const {width} = Dimensions.get('window');

const MusicItem = ({item}) => {
  const {title, artist, duration, artwork} = item;

  return (
    <Pressable style={({pressed}) => [
        {
          backgroundColor: pressed
          ? '#232325'
          : '#19191b'
        },
        styles.container
      ]}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <Image style={styles.img} source={artwork}></Image>
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
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: -0.3,
    borderColor: '#19191b',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  artist: {
    color: '#5c5b5e',
    size: 12
  },
  rightContainer: {

  },
  duration: {
    color: '#5c5b5e',
    position: "relative",
    right: 10
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 5
  }
})