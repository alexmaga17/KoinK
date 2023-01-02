import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, SafeAreaView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ProgressBar } from 'react-native-paper';



const Main = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground  resizeMode="cover" style={styles.background} source={{ uri:'https://sonaligl.sirv.com/Images/Ativo%202.png' }} /> */}
            <SvgUri style={styles.background} uri="https://sonaligl.sirv.com/Images/Group%2045.svg" />
            <View style={styles.levelBar}>
                <View style={styles.levelBar.level}>
                    <Text style={styles.levelBar.level.text}>10</Text>
                </View>
                <ProgressBar style={styles.levelBar.bar} progress={0.5} color='#FF6600' />
            </View>
            <View style={styles.coins}>
                <Text style={styles.coins.text}>14.000</Text>
                <SvgUri style={styles.coins.icon} uri="https://sonaligl.sirv.com/Images/coinSimbol.svg" />
            </View>
            <View style={styles.tabbar}>   
                <Pressable onPress={() => navigation.navigate('Minijogos')} style={styles.tabbar.minijogos}>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/Tabbar/minijogos.svg" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Missoes')} style={styles.tabbar.missoes}>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/Tabbar/Miss%C3%B5es.svg" />
                </Pressable> 
                <Pressable  style={styles.tabbar.principal}>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/Tabbar/pp.svg" />
                </Pressable> 
                <Pressable  style={styles.tabbar.loja}>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/Tabbar/Loja.svg" />
                </Pressable> 
                <Pressable  style={styles.tabbar.perfil}>
                    <SvgUri uri="https://sonaligl.sirv.com/Images/Tabbar/Perfil.svg" />
                </Pressable>  
            </View>      
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        position: 'absolute',
        width: 340,
        height: '100%',
        top:0,
        left:0
    },
    levelBar:{
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        level:{
            justifyContent: 'center',
            width:55,
            height:55,
            borderRadius:55/2,
            borderWidth:2,
            borderColor: '#FFFFFF',
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
            width:308,
            height:30,
            alignSelf:'center',
            borderWidth:2,
            borderColor: '#FFFFFF',
            borderRadius:20,
            backgroundColor:'#FFFFFF'
        },
    },
    coins:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end',
        marginTop:10,
        marginRight:15,
        width:120,
        height:39,
        borderRadius:20,
        backgroundColor:'#FFFFFF',
        text:{
            color:'#353535',
            fontSize:18
        },
        icon:{
            width:21,
            height:21
        }
    },
    tabbar:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent: 'center',
        minijogos:{
            marginHorizontal:-5
        },
        missoes:{
            marginHorizontal:-5
        },
        principal:{
            marginHorizontal:-5,
           alignItems: 'center',
        },
        missoes:{
            marginHorizontal:-5

        },
        perfil:{
            marginHorizontal:-5

        }  
    }
});

export default Main;