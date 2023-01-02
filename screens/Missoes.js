import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';



const Onboarding1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.background} source={{ uri: 'https://sonaligl.sirv.com/Images/BackgroundOnb.png' }} />
            <View style={styles.topContainer}>
                <SvgUri uri="https://sonaligl.sirv.com/Images/backArrow.svg" />
                <View style={styles.topContainer.coinsBox}>
                    <Text style={styles.topContainer.coinsBox.text}>14.000</Text>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/coinSimbol.svg" />
                </View>
            </View>
            <View style={styles.title.box}>
                <Text style={styles.title.text}>Missões</Text>
            </View>
            <View style={styles.missoes}>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
       flex:1,
       //justifyContent:'center'
    },
    background:{
        position: 'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0
    },
    topContainer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        coinsBox:{
            //alignSelf:'flex-end',
            width:129,
            height:39,
            backgroundColor:'#FFFFFF',
            borderRadius:20,
            text:{
                color:'#353535',
                fontSize:18
            }
        }
    },
    title:{
        justifyContent:'center',
        box:{
            alignSelf: 'center',
            width:205,
            height:60,
            backgroundColor:'#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        },
        text:{
            alignSelf:'center',
            paddingTop:17,
            fontSize:22,
            fontWeight:'bold',
            color:'#353535'
        }
    },
    missoes:{
        alignItems: 'center',
        flex:5.5,
        width:'100%',
        backgroundColor:'#FFFFFF',
    }
});

export default Onboarding1;