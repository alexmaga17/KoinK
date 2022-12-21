import React, { useState } from 'react';
import { ImageBackground, Template, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';



const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/loginBack.png')} />
            <Image style={styles.logo} source={require('../assets/logo.png')} />
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
            <Pressable  onPress={() => navigation.navigate('Login')} style={styles.buttonEntrar}>
                <Text style={styles.buttonEntrar.text}>Entrar</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register')} style={styles.buttonRegistar}>
                <Text style={styles.buttonRegistar.text}>Criar Conta</Text>
            </Pressable>
        </View>
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
        left: '24.1%',
        right: '23.88%',
        top: '7.23%',
        bottom: '87.44%'
    },
    leitao:{
        position: 'absolute',
        width: 136,
        height: 204.78,
        left: 127,
        top: 132,
    },
    nameInput:{
        position: 'absolute',
        width:284,
        height:52,
        left:55,
        top:412,
        bottom:'45.02%',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    passInput:{
        position: 'absolute',
        width:284,
        height:52,
        left:55,
        top:474,
        bottom:'45.02%',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    buttonEntrar:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        top: 655,
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
        top: 728,
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