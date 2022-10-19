import { View, Text, Button, StyleSheet, Pressable, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react'

const Login = ({navigation}) => {

    const [loginInp, setLogin] = useState('')
    // const [passwordInp, setPassword] = useState('')
    const [cash, setCash] = useState('')

    const login = async () => {

            let obj = {
                login: loginInp, 
                cash: cash
            }
        if(loginInp === ''){
            Alert.alert('Далвайов инпут пустой!') 
        } else {
             try {  
                await AsyncStorage.setItem('Username', JSON.stringify(obj))
                navigation.navigate('Home')
             } catch(error) {
                 console.log(error)
             }
        }

        
    }

  return (
    <View style={styles.cont}>
        <TextInput style={styles.inp} onChangeText={value => setLogin(value)} placeholder='Enter login'/>
        {/* <TextInput style={styles.inp} onChangeText={value => setPassword(value)} placeholder='Enter Password'/> */}
        <TextInput style={styles.inp} onChangeText={value => setCash(value)} placeholder='Enter Cash'/>
        <Button title="Login" onPress={login}>Login</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center'
    },
    inp: {
        width: 200, 
        padding: 20,
        backgroundColor: 'white'
    }
})