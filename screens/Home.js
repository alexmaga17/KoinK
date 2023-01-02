import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <SvgUri style={styles.background} uri="https://sonaligl.sirv.com/Images/Group%2047.svg" /> */}
            <ImageBackground  resizeMode="cover" style={styles.background} source={require('../assets/loginBack.png')} />
            <View style={styles.logos}>
                <SvgUri uri="https://sonaligl.sirv.com/Images/logo.svg" />
                <SvgUri style={styles.logos.leitao} uri="https://sonaligl.sirv.com/Images/KoinkLogin1.svg" />
            </View>  
            <View style={styles.social}>
                <Pressable style={styles.social.buttonGoogle}>
                    <Text style={styles.social.buttonGoogle.text}><SvgUri uri="https://sonaligl.sirv.com/Images/google.svg" />Continuar com o Google</Text>
                </Pressable>
                <Pressable style={styles.social.buttonFacebook}>
                    <Text style={styles.social.buttonFacebook.text}><SvgUri uri="https://sonaligl.sirv.com/Images/facebook.svg" />Continuar com o Facebook</Text>
                </Pressable>
                <Pressable style={styles.social.buttonApple}>
                    <Text style={styles.social.buttonApple.text}><SvgUri uri="https://sonaligl.sirv.com/Images/apple.svg" />Continuar com o Apple ID</Text>
                </Pressable>
            </View>
            <View style={styles.account}>   
                <Pressable  onPress={() => navigation.navigate('Login')} style={styles.account.buttonEntrar}>
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
        justifyContent:'space-around'
    },
    background:{
        position:'absolute',
        top:0,
        left:0,
        resizeMode:'cover',
    },
    logos:{
        alignItems:'center',
        leitao:{
            marginTop:20
        }
    },
    social:{
        alignItems:'center',
        buttonGoogle:{
            justifyContent: 'center',
            marginTop:7,
            width:284,
            height:52,
            backgroundColor:'#FFFFFF',
            borderRadius:10,
            text:{
                alignSelf:'center',
                fontSize:17,
                color:'#353535'
            }
        },
        buttonFacebook:{
            justifyContent: 'center',
            marginTop:7,
            width:284,
            height:52,
            backgroundColor:'#3B5998',
            borderRadius:10,
            text:{
                alignSelf:'center',
                fontSize:17,
                color:'#FFFFFF'
            }
        },
        buttonApple:{
            justifyContent: 'center',
            marginTop:7,
            width:284,
            height:52,
            backgroundColor:'#000000',
            borderRadius:10,
            text:{
                alignSelf:'center',
                fontSize:17,
                color:'#FFFFFF'
            }
        }
    },
    account:{
        //marginTop:80,
        //justifyContent: 'space-between',
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

export default Home;