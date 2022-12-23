import React, { useState } from 'react';
import { ImageBackground, Template, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ProgressBar } from 'react-native-paper';



const Main = ({ navigation }) => {
    return (
        <View>
            <ImageBackground style={styles.background} source={{ uri:'https://sonaligl.sirv.com/Images/backMain.png' }}/>
            <ProgressBar style={styles.bar} progress={0.8} color='#FF6600' />
            <SvgUri style={styles.koink} uri="https://sonaligl.sirv.com/Images/koinkAcenar.svg" />
            <Pressable>
                <SvgUri style={styles.minijogos} uri="https://sonaligl.sirv.com/Images/minijogos.svg" />
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
    bar:{
        position:'absolute',
        width:308,
        height:30,
        top:11,
        left:21,
        border:'2px solid #FFFFFF',
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
        left: '3.33%',
        right: '82.05%',
        top: '90.68%',
        bottom: '2.51%',
    }
});

export default Main;