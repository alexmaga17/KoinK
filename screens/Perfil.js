import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput, Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
// import AppIntroSlider from 'react-native-app-intro-slider';
const ListTab = [
    {
        status: 'Inventário'
    },
    {
        status: 'Dados'
    }
]

const InventarioTab = [
    {
        slider: 'Avatares',
        id: 0
    },
    {
        slider: 'Boosters',
        id:1
    }
]
const Perfil = ({ navigation }) => {
    const [status, setStatus] = useState('Inventário')
    const [slider, setSlider] = useState('Avatares')
    const [sliderId, setSliderId] = useState(0)
    const [showHome, setShowHome] = useState(false)
    const setStatusFilter = status => {
        setStatus(status)
    }

    const setSliderFilter = slider => {
        setSlider(slider)
    }
    
    function swipeIndex(id){
        setSliderId(id)
    }
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#0500FF', '#007FC6', '#550088', '#17011F']}
                style={styles.linearGradient}
            ></LinearGradient>
            <View style={styles.navbar}>
                <Icon name="chevron-back" size={30} color="#fff" style={styles.icon}></Icon>
                <Text style={styles.navbarText}>Perfil</Text>
                <IconEntypo name="dots-three-vertical" size={25} color="#fff" style={styles.icon}></IconEntypo>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.opacityContainer}>
                </View>
                <View style={styles.perfilImage}>
                    <SvgUri width='90' height='90' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                </View>
                <View style={styles.nomeContainer}>
                    <Text style={styles.nome}>@jmeireles</Text>
                </View>
                <View style={styles.dadosUser}>
                    <View style={styles.nivelData}>
                        <Text style={styles.nivel}>Nível</Text>
                        <Text style={styles.numero}>16</Text>
                    </View>
                    <View style={styles.border}></View>
                    <View style={styles.moedasData}>
                        <Text style={styles.nivel}>Moedas</Text>
                        <Text style={styles.numero}>14.000</Text>
                    </View>
                    <View style={styles.border}></View>
                    <View style={styles.classData}>
                        <Text style={styles.nivel}>Classificação</Text>
                        <Text style={styles.numero}>28</Text>
                    </View>
                </View>
                <View style={styles.tabs}>
                    {ListTab.map((tab, index) => (
                        <Pressable key={index} style={[styles.btnTab, status === tab.status && styles.btnTabActive]} onPress={() => setStatusFilter(tab.status)}>
                            <Text style={[styles.btnText, status === tab.status && styles.btnTextActive]}>{tab.status}</Text>
                        </Pressable>
                    ))}
                </View>
                <View>
                    {status == 'Inventário' &&
                        <View style={styles.containerInv}>
                            <View style={[styles.sliderName]}>
                                {InventarioTab.map((inv, index) => (
                                    <Text key={index} style={[styles.sliderTxt, index===0 && styles.sliderTxtBorder ,index === sliderId && styles.sliderActive]} >{inv.slider}</Text>
                                ))}
                            </View>

                            <Swiper
                            index={0}
                            loop={false}
                            dot ={
                                <View style={{backgroundColor:'#666666', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                            }
                            activeDot ={
                                <View style={{backgroundColor: '#666666', width: 14, height: 14, borderRadius: 100, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                            }
                            onIndexChanged ={(idx) => swipeIndex(idx)}
                            >
                                <ScrollView style={styles.containerAvatares}>
                                    <View style={styles.avatares}>

                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                    </View>
                                    <View style={styles.avatares}>

                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                    </View>
                                    <View style={styles.avatares}>

                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                    </View>
                                </ScrollView>

                                <ScrollView style={styles.containerBoosters}>
                                    <View style={styles.boosters}>

                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                    </View>
                                    <View style={styles.avatares}>

                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                        <View style={styles.avataresImage}>
                                            <SvgUri width='80' height='80' uri="https://rapedolo.sirv.com/koink/KoinkIntelectual.svg" />
                                        </View>
                                    </View>
                                </ScrollView>
                            </Swiper>


                        </View>
                    }
                </View>

                {/* view dos dados */}
                <View>
                    {status == 'Dados' &&
                        <View style={styles.containerInv}>
                            <View style={styles.dadosInput}>
                                <View style={[styles.inputTxt, styles.inputTxt1]}>
                                    <TextInput style={[{ flex: 1 }]}>jmeireles</TextInput>
                                    <IconMaterial style={[styles.imageStyle]} name="pencil-outline" size={20} color="#000"></IconMaterial>
                                </View>
                                <View style={styles.inputTxt}>
                                    <TextInput style={[{ flex: 1 }]}>jmeireles@gmail.com</TextInput>
                                    <IconMaterial style={[styles.imageStyle]} name="pencil-outline" size={20} color="#000"></IconMaterial>
                                </View>
                                <View style={styles.inputTxt}>
                                    <TextInput style={[{ flex: 1 }]}>*********</TextInput>
                                    <IconMaterial style={[styles.imageStyle]} name="pencil-outline" size={20} color="#000"></IconMaterial>
                                </View>
                            </View>
                            <Pressable style={styles.editarButton}>
                                <Text style={styles.editarTxt}>Editar</Text>
                            </Pressable>
                        </View>
                    }
                </View>
            </View>



        </SafeAreaView>
    );
};

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
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
    },
    navbarText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 1,
    },
    perfilImage: {
        backgroundColor: '#FF6600',
        width: 110,
        height: 110,
        borderRadius: 1000,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: "white",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityContainer: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        opacity: 0.3,
        width: '100%',
        height: '100%',
        marginTop: 50,
        borderRadius: 30
    },
    contentContainer: {
        display: 'flex',
        marginTop: 30,
        height: '100%',
    },
    nomeContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nome: {
        color: 'white',
        fontSize: 20,
    },
    dadosUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    nivelData: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 30,
    },
    moedasData: {
        flexDirection: 'column',
        alignItems: 'center',
        // marginLeft: 30,
    },
    classData: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15
    },
    nivel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,

    },
    numero: {
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 22
    },
    border: {
        borderColor: 'white',
        borderRightWidth: 2,
        height: 80
    },

    tabs: {
        marginTop: 20,
        flexDirection: 'row',
    },
    btnTab: {
        width: Dimensions.get("window").width / 2,
        padding: 14
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
    },
    btnTabActive: {
        backgroundColor: '#F6F4F2',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    btnTextActive: {
        color: '#6B6BA3',
    },
    containerInv: {
        width: '100%',
        height: '67%',
        backgroundColor: '#F6F4F2',

    },

    sliderContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
    },

    sliderName: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sliderTxt: {
        alignSelf: 'center',
        paddingHorizontal: 5,
        fontSize: 18,
        color: '#A6A6A6'
    },

    
    sliderActive:{
        color:"#6B6BA3"
    },
    sliderTxtBorder:{
        borderRightWidth:1,
        borderColor:"#6B6BA3",
    },

    containerAvatares: {
        marginVertical: 15
    },
    avatares: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    avataresImage: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 100,
        borderRadius: 1000,
        borderStyle: 'solid',
        borderColor: "#D8D8D8",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerBoosters:{
        marginVertical: 15
    },

    boosters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // parte dos dados


    inputTxt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '86%',
        marginTop: 20,
        paddingHorizontal: 15


    },
    inputTxt1: {
        marginTop: 30,
    },

    editIcon: {
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },

    editarButton: {
        backgroundColor: '#FF6600',
        borderRadius: 10,
        width: '86%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingVertical: 14
    },
    editarTxt: {

        color: '#FFFFFF',
    },


});

export default Perfil;