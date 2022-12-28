import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, SafeAreaView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ProgressBar } from 'react-native-paper';



const Main = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={{ uri:'https://sonaligl.sirv.com/Images/backMain.png' }}/>
            <View>
                <ProgressBar style={styles.bar} progress={0.5} color='#FF6600' />
                <View style={styles.level}>
                    <Text style={styles.level.text}>10</Text>
                </View>
                {/* <View style={styles.coins}>
                    <Text style={styles.coins.text}>10</Text>
                </View> */}
                <SvgUri style={styles.koink} uri="https://sonaligl.sirv.com/Images/koinkAcenar.svg" />
                <Pressable>
                    <SvgUri style={styles.minijogos} uri="https://sonaligl.sirv.com/Images/minijogos.svg" />
                </Pressable>
                <Pressable>
                    <SvgUri style={styles.missoes} uri="..." />
                </Pressable>
                <Pressable>
                    <SvgUri style={styles.jogoPrincipal} uri="..." />
                </Pressable>
                <Pressable>
                    <SvgUri style={styles.loja} uri="..." />
                </Pressable>
                <Pressable>
                    <SvgUri style={styles.perfil} uri="..." />
                </Pressable>
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
    level:{
        justifyContent: 'center',
        position: 'absolute',
        width:55,
        height:55,
        borderRadius:55/2,
        borderWidth:2,
        borderColor: '#FFFFFF',
        marginLeft:31,
        marginTop:39.74,
        backgroundColor:'#FF6600',
        text:{
            alignSelf:'center',
            fontFamily:'Mulish',
            fontWeight:'bold',
            fontSize:20,
            color:'#FFFFFF',
        }
    },
    bar:{
        position:'absolute',
        width:308,
        height:30,
        marginTop:51,
        alignSelf:'center',
        borderWidth:2,
        borderColor: '#FFFFFF',
        borderRadius:20,
        backgroundColor:'#FFFFFF'
    },
    koink:{
        position:'absolute',
        width:194,
        height:217.13,
        top:409,
        left:98
    },
    minijogos:{
        position: 'absolute',
        width:57,
        height:57,
        marginTop:750,
        marginLeft:13
    },
    missoes:{
        position: 'absolute',
        width:57,
        height:57,
        marginTop:750,
        marginLeft:73
    },
    jogoPrincipal:{
        position: 'absolute',
        width:70,
        height:70,
        marginTop:750,
        marginLeft:146
    },
    loja:{
        position: 'absolute',
        width:57,
        height:57,
        marginTop:750,
        marginLeft:235
    },
    perfil:{
        position: 'absolute',
        width:57,
        height:57,
        marginTop:750,
        marginLeft:308
    }
});

export default Main;