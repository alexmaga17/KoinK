import React, { useState } from 'react';
import { ImageBackground, Template, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';




const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/loginBack.png')} />
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Image style={styles.leitao} source={require('../assets/KoinkLogin.png')} />
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
        top:363,
        bottom:'45.02%',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    emailInput:{
        position: 'absolute',
        width:284,
        height:52,
        left:55,
        top:422,
        bottom:'45.02%',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    passInput:{
        position: 'absolute',
        width:284,
        height:52,
        left:55,
        top:482,
        bottom:'45.02%',
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