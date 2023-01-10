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



export default function SelectQuizz({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#0075FF', '#0E41A6', '#430B89']}
                style={styles.linearGradient}
            ></LinearGradient>

            <View style={styles.navbar}>
                <Text style={styles.pontuacaoTxt}>Pontuação: 3</Text>
            </View>
            <View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
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

    }
})