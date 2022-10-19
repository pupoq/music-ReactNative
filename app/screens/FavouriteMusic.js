import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteMusic = async () => {

  const [artwork, setArtWork] = useState('')
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [duration, setDuration] = useState('')

//   const getData = async () => {
//     try {
//         AsyncStorage.getItem('Fav')
//         .then(value => {
//             if(value !== null){
//                 value = JSON.parse(value)
//                 console.log(value)
//                 setArtWork(value.artwork)
//                 setTitle(value.title)
//                 setArtist(value.artist)
//                 setDuration(value.duration)
//               }
//         })
//     } catch(error) {
//         console.log(error)
//     }
// }


//   try {
//             AsyncStorage.getItem('Username')
//             .then(value => {
//                 if(value !== null){
//                     value = JSON.parse(value)
//                     console.log(value)
//                     setCash(value.cash)
//                     setName(value.login)
//                 }
//             })
//         } catch(error) {
//             console.log(error)
//         }


//   useEffect( async () => {
//     localStorage.clear()
//     getData()
//   }, [])

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

export default FavoriteMusic

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})