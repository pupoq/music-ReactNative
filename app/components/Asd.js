import { View, Text, Pressable, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Asd = () => {


    const [total, setTotal] = useState(0)
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [arr, setArr] = useState([])
    const [result, setResult] = useState('')

    const press = async () => {
        let id1 = arr.length
        console.log(id1)

        let obj = {
            first: first,
            sec: second,
            id: id1++
        }
        let array = arr
        array.push(obj)
        setArr(array)
        console.log(arr)

        for(let item of arr){
            setResult(() => {
                <View><Text>{item.first}</Text></View>
            })
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.titles}>
                <Text style={styles.mainTitle}>Expense Tracker React App</Text>
                <Text>Total Expense: <Text style={{color: 'green'}}>$ {total}</Text></Text>
        </View>
        <View style={styles.cont2}>
            <View style={styles.row}>
                <Text style={styles.asd}>Name of Expense</Text>
                <TextInput onChangeText={e => setFirst(e)} style={styles.input} placeholder='Name of Expense' />
            </View>
            <View style={styles.row2}>
                <Text style={styles.asd}>$ Amount</Text>
                <TextInput onChangeText={e => setSecond(e)} style={styles.input} placeholder='0.00' />
            </View>
            <Pressable onPress={press}><Text style={styles.btn}>Add</Text></Pressable>
        </View>
        <View style={styles.res}>
            <FlatList
            data={arr}
            renderItem={({item}) => (
            <View item={item.first}><Text>{item.first}</Text></View>
            )}
            keyExtractor={item => item.id}
        />
        {result}
        </View>
    </View>
  )
}

export default Asd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#e8ecef',
        justifyContent: 'flex-start'
    },
    titles: {
        height: 100,
        alignItems: 'center',
        marginTop: 40
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'monospace',
        position: 'relative'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 1,
        borderColor: '#dfe0e1',
        borderRadius: 5,
        position: 'relative',
        width: 230
    },
    cont2: {
        // position: 'relative',
        // bottom: 560,
        // left: 20,
        marginBottom: 550,
        marginLeft: 10
    },
    asd: {
        width: 150
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    btn: {
        padding: 10,
        backgroundColor: '#0b77f5',
        width: 50,
        color: 'white',
        borderRadius: 5,
        marginTop: 10
    },
    res: {
        // marginBottom: 700,
        color: 'red'
    }
})