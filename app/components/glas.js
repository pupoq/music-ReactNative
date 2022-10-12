import { View, Text, Pressable, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const glas = () => {

    const [word, setWord] = useState('')
    const [result, setResult] = useState('')

    const btn = () => {
        let number = word.split(' ')
        let max = Math.max(...number)
        let def = number.join(' ')
        let max2 = def.split(max)
        let def2 = max2.join(' ')
        let max3 = def2.split(' ')
        let res = Math.max(...max3)
        setResult(res)

    }

  return (
    <View style={styles.container}>
        <TextInput style={styles.inp} onChangeText={e => setWord(e)} placeholder='Enter' />
        <Pressable style={styles.btn} onPress={btn}><Text>Button</Text></Pressable>
        <View><Text>{result}</Text></View>
    </View>
  )
}

export default glas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#e8ecef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inp: {
        padding: 10,
        backgroundColor: 'white',
        width: 200,
        textAlign: 'center'
    },
    btn: {
        marginTop: 40,
        width: 150,
        backgroundColor: 'grey',
        padding: 5,
        color: 'white'
    }
})