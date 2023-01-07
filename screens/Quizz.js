import React, { useState } from 'react';
import { ImageBackground, Text, Modal, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput, Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';



export default function Quizz({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#0075FF', '#0E41A6', '#430B89']}
                style={styles.linearGradient}
            ></LinearGradient>

            <View style={styles.navbar}>
                <Text style={styles.pontuacaoTxt}>Pontuação: 3</Text>
                <Icon name="pause-circle" size={40} color="#fff"></Icon>
            </View>
            <View style={styles.imageQuizz}>
                <SvgUri style={{ marginLeft: 30 }} width='250' height='250' uri="https://rapedolo.sirv.com/koink/koinkPergunta.svg" />
                <View style={[styles.containerPergunta, { transform: [{ rotate: '2deg' }] }]}></View>
                <View style={[styles.containerPergunta, { transform: [{ rotate: '-2deg' }] }]}></View>
                <View style={styles.containerPergunta}>
                    <Text style={styles.perguntaTxt}>Qual das seguintes opções não tem a ver com literacia financeira?</Text>
                </View>
            </View>
            <View style={styles.numPerguntasContainer}>
                <Text style={styles.numPerguntasTxt}>4/4</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
    },

    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.72,
        position: 'absolute'
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
        alignItems: 'center'
    },
    pontuacaoTxt: {
        color: '#f6f4f2',
        fontSize: 22,
        fontWeight: 'bold'

    },
    imageQuizz: {
        alignItems: 'center',
    },
    containerPergunta: {
        position: 'absolute',
        marginTop: 140,
        width: '80%',
        height: 150,
        backgroundColor: '#F6F4F2',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: "#BEBEBE",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    perguntaTxt: {
        color: '#353535',
        fontSize: 18,
        textAlign: 'center',
    },
    numPerguntasContainer:{
        alignItems: 'center',
        marginTop:70
    },
    numPerguntasTxt:{
        color: '#F6F4f2',
        fontSize:18
    }
})