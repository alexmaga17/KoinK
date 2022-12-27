import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';



const Onboarding1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={{ uri: 'https://sonaligl.sirv.com/Images/BackgroundOnb.png' }} />
            <View style={styles.card}>
                <SvgUri style={styles.koink} uri="https://sonaligl.sirv.com/Images/koinkPhone.svg" />
                <Text style={styles.cardTitle}>Joga!</Text>
                <Text style={styles.cardText}>Tens diversos jogos e minijogos onde ganhas moedas que podem ser usadas na loja ou dentro do jogo principal</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.button.text}>Próximo</Text>
                </Pressable>
                <Text style={styles.skip}>Pular</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
       flex:1
    },
    background:{
        position: 'absolute',
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    card:{
        alignSelf:'center',
        marginVertical:51,
        marginHorizontal:12,
        width:367,
        height:735,
        borderRadius:30,
        backgroundColor:'white'
    },
    koink:{
        //position: 'absolute',
        width:158.51,
        height:180,
        marginTop:106,
        marginBottom:449,
        marginLeft:112,
        marginRight:96.49
    },
    cardTitle:{
       position: 'absolute', 
       marginTop:350,
       marginBottom:350,
       color:'#FF6600',
       fontFamily:'Ubuntu-Bold',
       fontSize:30,
       alignSelf:'center' 
    },
    cardText:{
        position: 'absolute',
        marginTop:401,
        marginBottom:242,
        marginHorizontal:49,
        color:'#353535',
        fontFamily:'Mulish',
        fontSize:18,
        textAlign: 'center',
    },
    button:{
        position:'absolute',
        justifyContent:'center',
        marginTop:603,
        marginBottom:80,
        marginHorizontal:49,
        width:269,
        height:52,
        backgroundColor:'#FF6600',
        borderRadius:10,
        text:{
           alignSelf:'center',
           fontFamily:'Mulish',
           fontSize:18,
           color:'#FFFFFF'
        }
    },
    skip:{
        position:'absolute',
        marginTop:671,
        marginBottom:44,
        alignSelf:'center',
        color:'#A6A6A6',
        fontSize:16
    }
});

export default Onboarding1;