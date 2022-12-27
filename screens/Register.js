import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';



const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    style={styles.emailInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor="black"
            />
            <TextInput 
                    style={styles.passInput}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor="black"
            />
            <Pressable style={styles.buttonRegistar}>
                <Text style={styles.buttonRegistar.text}>Registar</Text>
            </Pressable>
            <Text style={styles.question}>Já tens uma conta?</Text>
            <Pressable onPress={() => navigation.navigate('Login')} style={styles.buttonLogin}>
                <Text style={styles.buttonLogin.text}>Login</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
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
        alignSelf:'center',
        width: 136,
        height: 204.78,
        marginTop:132
    },
    nameInput:{
        position: 'absolute',
        alignSelf:'center',
        width:284,
        height:52,
        marginTop:363,
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    emailInput:{
        position: 'absolute',
        alignSelf:'center',
        width:284,
        height:52,
        marginTop:422,
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    passInput:{
        position: 'absolute',
        alignSelf:'center',
        width:284,
        height:52,
        marginTop:482,
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    buttonRegistar:{
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
    question:{
        top:735,
        left:130,
        alignSelf:'center',
        fontFamily: 'Mulish',
        fontSize:14,
        color:'#8A8A8A'
    },
    buttonLogin:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        top: 740,
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

export default Register;