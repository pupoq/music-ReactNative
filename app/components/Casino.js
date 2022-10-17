import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, Image, ImageBackground, Alert } from 'react-native'

export const Casino = () => {

    const [selectedNum, setSelectedNum] = useState(0)
    const [first, setFirst] = useState(0)
    const [sec, setSec] = useState(0)
    const [third, setThird] = useState(0)
    const [array, setArray] = useState([0, 0, 0])
    const [cash, setCash] = useState(2000)

    const [success, setSuccess] = useState(0)

    const calc = () => {
        // setFirst(Math.floor(Math.random() * 8))
        // setSec(Math.floor(Math.random() * 8))
        // setThird(Math.floor(Math.random() * 8))
       

        let qwe = array.map((el) => el = Math.floor(Math.random() * 7) + 1)

        setArray(qwe)
        setSuccess(0)

        for(let item of array){
            if(selectedNum === item){
                setSuccess(success + 1)
            }
        }
        asdasd()
    }

    const asdasd = () => {
        if(cash < 100){
            Alert.alert('Акша жок')
        } else {
            setCash(cash - 100)
            if(success == 1){
                Alert.alert('Одно совпадение! Ваш баланс пополнен на 100$')
                setCash(cash + 100)
            } else if(success == 2){
                Alert.alert('Два совпадения! Ваш баланс пополнен на 200$')
                setCash(cash + 200)
            } else if(success == 3){
                Alert.alert('Три совпадения! Ебать! Ваш баланс пополнен на 100 000$')
                setCash(cash + 100000)
            } else {
                Alert.alert('Лох вонючий ниче не выиграл!')
            }
        }
    }

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

  return (
    <View style={styles.cont}>
        <Text style={styles.title}>Casino-Naebalovo</Text>
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
            <View><Text>{array[0]}</Text></View>
            <View><Text>{array[1]}</Text></View>
            <View><Text>{array[2]}</Text></View>
        </View>
        <Pressable style={styles.good} onPress={calc}><Text>Good luck!</Text></Pressable>
    </View>
  )
}


export default Casino

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
    }
})