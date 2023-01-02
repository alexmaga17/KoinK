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
            {/* <SvgUri style={styles.background} uri="https://sonaligl.sirv.com/Images/Group%2047.svg" /> */}
            <ImageBackground  resizeMode="cover" style={styles.background} source={require('../assets/loginBack.png')} />
            <View style={styles.logos}>
                <SvgUri uri="https://sonaligl.sirv.com/Images/logo.svg" />
                <SvgUri style={styles.logos.leitao} uri="https://sonaligl.sirv.com/Images/KoinkLogin1.svg" />
            </View> 
            <View style={styles.inputs}>
            <TextInput 
                    style={styles.inputs.name}
                    onChangeText={setUsername}
                    value={username}
                    placeholder='Nome de Utilizador'
                    placeholderTextColor="black"
            />
            <TextInput 
                    style={styles.inputs.pass}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor="black"
            />
            </View>
            <View style={styles.account}>   
                <Pressable  onPress={() => navigation.navigate('Onboarding1')} style={styles.account.buttonEntrar}>
                    <Text style={styles.account.buttonEntrar.text}>Entrar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={styles.account.buttonRegistar}>
                    <Text style={styles.account.buttonRegistar.text}>Criar Conta</Text>
                </Pressable>
            </View> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
    },
    background:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0
    },
    logos:{
        alignItems:'center',
        leitao:{
            marginTop:20
        }
    },
    inputs:{
        alignItems:'center',
        name:{
            width:284,
            height:52,
            alignSelf:'center',
            backgroundColor:'#FFFFFF',
            borderRadius:10
        },
        pass:{
            marginTop:10,
            width:284,
            height:52,
            alignSelf:'center',
            backgroundColor:'#FFFFFF',
            borderRadius:10
        }
    },
    account:{
        alignItems: 'center',
        buttonEntrar:{
            justifyContent: 'space-around',
            marginTop:7,
            width:284,
            height:52,
            backgroundColor:'#FF1D25',
            borderRadius:10,
            text:{
                alignSelf:'center',
                fontSize:17,
                color:'#FFFFFF'
            }
        },
        buttonRegistar:{
            justifyContent: 'center',
            marginTop:7,
            width:284,
            height:52,
            backgroundColor:'#EBEBEB',
            borderRadius:10,
            text:{
                alignSelf:'center',
                fontSize:17,
                color:'#353535'
            }
        },
    },
});

export default Login;