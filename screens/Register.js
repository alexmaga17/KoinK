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
            {/* <SvgUri  resizeMode="cover" style={styles.background} uri="https://sonaligl.sirv.com/Images/Group%2047.svg" /> */}
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
                    style={styles.inputs.email}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
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
                <Pressable  onPress={() => navigation.navigate('Login')} style={styles.account.buttonRegistar}>
                    <Text style={styles.account.buttonRegistar.text}>Registar</Text>
                </Pressable>
                <Text style={styles.account.text}>Já tens uma conta?</Text>
                <Pressable onPress={() => navigation.navigate('Login')} style={styles.account.buttonLogin}>
                    <Text style={styles.account.buttonLogin.text}>Login</Text>
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
        email:{
            marginTop:10,
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
        buttonRegistar:{
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
        buttonLogin:{
            justifyContent: 'center',
            marginTop:3,
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
        text:{
            margin:3,
            fontSize:14,
            color:'#8A8A8A'
        }
    },
});

export default Register;