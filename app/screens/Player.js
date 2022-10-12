import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import songs from '../../model/data';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';

import {Audio} from 'expo-av';

const {height ,width} = Dimensions.get('window');

const Player = () => {

  const [songIndex, setIndex] = useState(0)
  const [soundObj, setSoundObj] = useState(null)

  const handlePlay = async (songObj) => {
    if(soundObj === null){
      const playback = new Audio.Sound()
      const status = await playback.loadAsync(songObj.url, {shouldPlay: true})
      setSoundObj({playback, status})
    }

    if(soundObj.status.isLoaded && !soundObj.status.isPlaying){
      const status = await soundObj.playback.plauAsync()
      setSoundObj({...soundObj, status})
    }

    if(soundObj.status.isLoaded && soundObj.status.isPlaying){
      const status = await soundObj.playback.pauseAsync()
      setSoundObj({...soundObj, status})
    }

    // const soundObj = await Audio.Sound.createAsync(songs[songIndex].url)
    // await soundObj.sound.playAsync()



  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList 
          data={songs}
          renderItem={({item}) => (
            <View style={styles.imgCont}>
              <Image style={styles.img} source={item.artwork}></Image>
            </View>
          )}
          onMomentumScrollEnd = {event => {
            let index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
            setIndex(index)
            // console.log(`ContentOffset: ${event.nativeEvent.contentOffset.x}`)
            // console.log(`width: ${event.nativeEvent.layoutMeasurement.width}`)
          }}
          horizontal
          pagingEnabled
        />
      </View>
      <View style={{position: 'relative', bottom: 50, width: width-30}}>
      <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="white"
          maximumTrackTintColor="#00000" 
        />
        <View style={styles.durationCont}>
          <Text style={styles.duration}>0:00</Text>
          <Text style={styles.duration}>0:00</Text>
        </View>
      </View>
        <View style={styles.songDataContainer}>
        <View>
          <Text style={styles.songTitle}>{songs[songIndex].title}</Text>
          <Text style={styles.songArtist}>{songs[songIndex].artist}</Text>
        </View>
        <Ionicons name='heart-outline' size={24} color='grey'/> 
      </View>
      <View style={styles.buttonsContainer}>
          <View style={styles.icon}>
            <Ionicons name='play-skip-back-sharp' size={50} color='grey' />
          </View>
          <Pressable onPress={() => handlePlay(songs[songIndex])} style={styles.icon}>
            <Ionicons name={soundObj?.status.isPlaying ? 'ios-pause-circle' : 'ios-play-circle-sharp'} size={80} color='grey' />
          </Pressable>
          <View style={styles.icon}>
            <Ionicons name='play-skip-forward' size={50} color='grey' />
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
    alignItems: 'center',
    flexDirection: 'column',
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
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  songDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    width: width-30,
    padding: 10,
    marginBottom: 50
  },
  songTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  songArtist: {
    color: 'grey'
  },
  bottomCont: {

  },
  slider: {
    width: width-30
  },
  durationCont: {
    flexDirection: 'row',
    width: width-30,
    padding: 10,
    justifyContent: 'space-between'
  },
  duration: {
    color: 'grey'
  }

})
