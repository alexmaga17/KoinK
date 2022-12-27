import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        axios.post('http://10.0.2.2:3000/users/login', {
            username,
            password
          })
          .then(response => {
            if (response.data.accessToken) {
                AsyncStorage.setItem('@token', response.data.accessToken)// Store the token in AsyncStorage or in a global state management library
                console.log('success')
            } else {
              console.log('Error');
            }
          })
          .catch(error => {
            console.error(error);
          });
      };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/loginBack.png')} />
            <SvgUri style={styles.logo} uri="https://sonaligl.sirv.com/Images/logo.svg" />
            <SvgUri style={styles.leitao} uri="https://sonaligl.sirv.com/Images/KoinkLogin1.svg" />
            <TextInput 
                    style={styles.nameInput}
                    onChangeText={setUsername}
                    value={username}
                    placeholder='Nome de Utilizador'
                    placeholderTextColor="black"
            />
            <TextInput 
                    style={styles.passInput}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor="black"
            />
            <Pressable  onPress={() => handleSubmit() } style={styles.buttonEntrar}>
                <Text style={styles.buttonEntrar.text}>Entrar</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register')} style={styles.buttonRegistar}>
                <Text style={styles.buttonRegistar.text}>Criar Conta</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    logo:{
        position: 'absolute',
        alignSelf:'center',
        width:202.85,
        height:45,
        marginTop:61
    },
    leitao:{
        position: 'absolute',
        width: 136,
        height: 204.78,
        marginTop:132,
        alignSelf:'center',
    },
    nameInput:{
        position: 'absolute',
        width:284,
        height:52,
        marginTop:412,
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    passInput:{
        position: 'absolute',
        width:284,
        height:52,
        marginTop:474,
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    buttonEntrar:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop:655,
        backgroundColor: '#FF1D25',
        borderRadius: 10,
        text:{
            alignSelf:'center',
            fontFamily: 'Mulish',
            fontSize: 18,
            color:'#FFFFFF'
        }
    },
    buttonRegistar:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop: 728,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        text:{
            alignSelf:'center',
            fontFamily: 'Mulish',
            fontSize: 18,
            color:'#353535'
        }
    }
});

export default Login;