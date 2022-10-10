import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import songs from '../../model/data';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Slider from '@react-native-community/slider';
import {Audio} from 'expo-av';

const {height ,width} = Dimensions.get('window');

const Player = () => {

  const handlePlay = async () => {
    const soundObj = await Audio.Sound.createAsync(songs[1].url)
    await soundObj.sound.playAsync()
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList 
          data={songs}
          renderItem={({item}) => (
            <View style={styles.imgCont}>
              <Image style={styles.img} source={item.artwork}></Image>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
            </View>
          )}
          horizontal
          pagingEnabled
        />
      </View>
      <View style={styles.buttonsContainer}>
          <View style={styles.icon}>
            <Ionicons name='play-skip-back-sharp' size={60} color='black' />
          </View>
          <Pressable onPress={handlePlay} style={styles.icon}>
            <Ionicons name='ios-play-circle-sharp' size={80} color='black' />
          </Pressable>
          <View style={styles.icon}>
            <Ionicons name='play-skip-forward' size={60} color='black' />
          </View>
      </View>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flex: 1,   
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imgCont: {
    width: width,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    left: '5%',
    marginBottom: 0
  },
  img: {
    width: 340,
    height: 300,
    borderRadius: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  artist: {
    marginTop: 10
  },
  icon: {
  },
  buttonsContainer: {
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  } 
})
