import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/loginBack.png')} />
                <SvgUri style={styles.logo} uri="https://sonaligl.sirv.com/Images/logo.svg" />
                <SvgUri style={styles.leitao} uri="https://sonaligl.sirv.com/Images/KoinkLogin1.svg" />
                <Pressable style={styles.buttonGoogle}>
                    <Text style={styles.buttonGoogle.text}><SvgUri uri="https://sonaligl.sirv.com/Images/google.svg" />Continuar com o Google</Text>
                </Pressable>
                <Pressable style={styles.buttonFacebook}>
                    <Text style={styles.buttonFacebook.text}><SvgUri uri="https://sonaligl.sirv.com/Images/facebook.svg" />Continuar com o Facebook</Text>
                </Pressable>
                <Pressable style={styles.buttonApple}>
                    <Text style={styles.buttonApple.text}><SvgUri uri="https://sonaligl.sirv.com/Images/apple.svg" />Continuar com o Apple ID</Text>
                </Pressable>
                <Pressable  onPress={() => navigation.navigate('Login')} style={styles.buttonEntrar}>
                    <Text style={styles.buttonEntrar.text}>Entrar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={styles.buttonRegistar}>
                    <Text style={styles.buttonRegistar.text}>Criar Conta</Text>
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
        marginTop:61,
        alignSelf:'center',
        width:390,
        height:844
    },
    leitao:{
        position: 'absolute',
        width: 136,
        height: 204.78,
        marginTop:132,
        alignSelf:'center',
    },
    buttonGoogle:{
        flexDirection:'row',
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop:363,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        text:{
            alignSelf:'center',
            fontFamily: 'Mulish',
            fontSize: 18,
            color:'#353535'
        },
    },
    buttonFacebook:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop: 433,
        backgroundColor: '#3B5998',
        borderRadius: 10,
        text:{
            alignSelf:'center',
            fontFamily: 'Mulish',
            fontSize: 18,
            color:'#FFFFFF'
        }
    },
    buttonApple:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop: 503,
        backgroundColor: '#000000',
        borderRadius: 10,
        text:{
            alignSelf:'center',
            fontFamily: 'Mulish',
            fontSize: 18,
            color:'#FFFFFF'
        }
    },
    buttonEntrar:{
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
        width: 284,
        height: 52,
        marginTop: 655,
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

export default Home;