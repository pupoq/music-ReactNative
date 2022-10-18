import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, Image, ImageBackground, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = ({navigation}) => {

    const [selectedNum, setSelectedNum] = useState(0)
    const [first, setFirst] = useState(7)
    const [sec, setSec] = useState(7)
    const [third, setThird] = useState(7)
    const [array, setArray] = useState([0, 0, 0])
    const [cash, setCash] = useState(0)
    const [name, setName] = useState('')

    const getData = async () => {
        try {
            AsyncStorage.getItem('Username')
            .then(value => {
                if(value !== null){
                    value = JSON.parse(value)
                    console.log(value)
                    setCash(value.cash)
                    setName(value.login)
                }
            })
        } catch(error) {
            console.log(error)
        }
    }

    const calc = () => {
        setFirst(Math.floor(Math.random() * 7) + 1)
        setSec(Math.floor(Math.random() * 7) + 1)
        setThird(Math.floor(Math.random() * 7) + 1)

        setArray([first, sec, third])
    }

    const qwe = async () => {
        if(cash < 100){
            await AsyncStorage.removeItem('Username')
            navigation.navigate('Login')
        } else {
            setCash(cash - 100)
            if(selectedNum === first && selectedNum === sec && selectedNum === third){
                Alert.alert('Три совпадения! Ебать! Ваш баланс пополнен на 100 000$')
                        setCash(cash + 100000)
            } else if(selectedNum === first && selectedNum === sec || selectedNum === first && selectedNum === third || selectedNum === sec && selectedNum === third){
                Alert.alert('Два совпадения! Ваш баланс пополнен на 200$')
                        setCash(cash + 200)
            } else if(selectedNum === first || selectedNum === sec || selectedNum === third){
                Alert.alert('Одно совпадение! Ваш баланс пополнен на 100$')
                        setCash(cash + 100)
            } else {
                Alert.alert('Лох вонючий ниче не выиграл!')
            }
        }
    
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(selectedNum){
            qwe()
        }
    }, [array])
    

const pressBtn1 = () => {
    setSelectedNum(1)
}
const pressBtn2 = () => {
    setSelectedNum(2)
}
const pressBtn3 = () => {
    setSelectedNum(3)
}
const pressBtn4 = () => {
    setSelectedNum(4)
}
const pressBtn5 = () => {
    setSelectedNum(5)
}
const pressBtn6 = () => {
    setSelectedNum(6)
}
const pressBtn7 = () => {
    setSelectedNum(7)
}

const calc2 = async () => {
    await AsyncStorage.removeItem('Username')
    navigation.navigate('Login')
} 

  return (
    <View style={styles.cont}>
        <Text style={styles.title}>Casino-Naebalovo</Text>
        <Text>Hello <Text style={styles.name}>{name}</Text></Text>
        <Text>Ваш баланс: {cash}$</Text>
        <View style={styles.row}><Text>Selected number: </Text><Text style={styles.selected}>{selectedNum}</Text></View>
        <View style={styles.btns}>
            <Pressable onPress={pressBtn1}  style={styles.btn}><Text style={styles.text}>1</Text></Pressable>
            <Pressable onPress={pressBtn2} style={styles.btn}><Text style={styles.text}>2</Text></Pressable>
            <Pressable onPress={pressBtn3} style={styles.btn}><Text style={styles.text}>3</Text></Pressable>
            <Pressable onPress={pressBtn4} style={styles.btn}><Text style={styles.text}>4</Text></Pressable>
            <Pressable onPress={pressBtn5} style={styles.btn}><Text style={styles.text}>5</Text></Pressable>
            <Pressable onPress={pressBtn6} style={styles.btn}><Text style={styles.text}>6</Text></Pressable>
            <Pressable onPress={pressBtn7} style={styles.btn}><Text style={styles.text}>7</Text></Pressable>
        </View>
        <View>
            <View><Text>{first}</Text></View>
            <View><Text>{sec}</Text></View>
            <View><Text>{third}</Text></View>
        </View>
        <Pressable style={styles.good} onPress={calc}><Text>Good luck!</Text></Pressable>
        <Pressable style={styles.good2} onPress={calc2}><Text>Exit</Text></Pressable>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffd700',
        textShadowRadius: 20,
        textShadowColor: 'white',
    },
    btns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        justifyContent: 'center'
    },
    btn: {
        margin: 10,
        padding: 5,
        backgroundColor: 'red',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    selected: {
        color: 'black'
    },
    row: {
        flexDirection: 'row'
    },
    good: {
        padding: 10,
        backgroundColor: 'yellow'
    },
    good2: {
        padding: 10,
        backgroundColor: 'red'
    }
})