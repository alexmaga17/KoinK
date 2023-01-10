import React, { useState, useEffect } from 'react';
import {  Animated,ImageBackground, Text, Modal, ScrollView, View, StyleSheet, Image, Pressable, Button, TouchableNativeFeedback, TextInput, Dimensions, Alert } from 'react-native';
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

    const [allQuestions,setallQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [coinsEarned, setcoinsEarned] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [loggedUser, setloggedUser] = useState(null);

    async function getLoggedUser(){
        const data = await AsyncStorage.getItem('loggedUser');
        if(data !== null){
            setloggedUser(JSON.parse(data));
            console.log(loggedUser);
        }
    }

    async function getQuestions() {
           const response = await axios.get('https://koink-api.onrender.com/quizzes/63b9b959730884c90ce6ee59');
          if(response.status == 200){
            setallQuestions(response.data.quizz.questions)
            console.log(allQuestions)
          }
    }

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        //setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
            setcoinsEarned(score * 100)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if(currentQuestionIndex == allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowNextButton(false);
            setShowScoreModal(true);
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setShowNextButton(false);
        }
    }


    useEffect(() => {
        getQuestions();
        getLoggedUser();
    }, []);


    return (
        <SafeAreaView>
            { loggedUser && allQuestions &&
                <SafeAreaView style={styles.container}>
                    <LinearGradient
                        colors={['#0075FF', '#0E41A6', '#430B89']}
                        style={styles.linearGradient}
                    ></LinearGradient>

                    <View style={styles.navbar}>
                        <Text style={styles.pontuacaoTxt}>Pontuação: {score}</Text>
                        <Icon name="pause-circle" size={40} color="#fff"></Icon>
                    </View>
                    <View style={styles.imageQuizz}>
                        <SvgUri style={{ marginLeft: 30 }} width='250' height='250' uri="https://rapedolo.sirv.com/koink/koinkPergunta.svg" />
                        <View style={[styles.containerPergunta, { transform: [{ rotate: '2deg' }] }]}></View>
                        <View style={[styles.containerPergunta, { transform: [{ rotate: '-2deg' }] }]}></View>
                        <View style={styles.containerPergunta}>
                            <Text style={styles.perguntaTxt}>{allQuestions[currentQuestionIndex]?.question}</Text>
                        </View>
                    </View>
                    <View style={styles.numPerguntasContainer}>
                        <Text style={styles.numPerguntasTxt}>{currentQuestionIndex+1}/4</Text>
                    </View>
                    <View style={styles.options}>
                        {
                            allQuestions[currentQuestionIndex]?.options.map(option => (
                                <Pressable 
                                    onPress={() => validateAnswer(option)}
                                    style={[styles.options.box,{
                                        backgroundColor: option == correctOption
                                        ? '#1EC64D'
                                        : option == currentOptionSelected
                                        ? '#FA1A1A'
                                        : '#FFFFFF'
                                    }]}
                                    key={option}
                                >
                                    <Text style={[styles.options.box.text,{
                                        color: option == correctOption
                                        ? '#FFFFFF'
                                        : option == currentOptionSelected
                                        ? '#FFFFFF'
                                        : '#353535'
                                    }
                                    ]}>{option}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                    <View>
                        { showNextButton == true &&
                        <Pressable style={styles.next} onPress={handleNext}>
                            { currentQuestionIndex == allQuestions.length-1 &&
                                <Text style={styles.next.text}>Finalizar</Text>
                            }
                            <Text style={styles.next.text}>Próxima</Text>
                        </Pressable>
                    }
                </View>
                <Modal
                        animationType="slide"
                        visible={showScoreModal}
                        transparent={true}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            //setModalVisible(!modalVisible);
                        }}
                    >
                        <BlurView intensity={100} tint='dark' style={styles.containerModal}>
                            <View style={styles.modal}>
                            <Text style={styles.modalTitulo}>Pontuação: {score}/{allQuestions.length}</Text>
                            <Text style={styles.modalSubTitulo}>Melhor: {loggedUser.stats.highScores.pigzz}/{allQuestions.length}</Text>
                            <Text style={styles.modalCoins}>Ganhaste <Text style={{color:'#FF6600'}}>{coinsEarned}</Text> coins!</Text>
                            </View>
                        </BlurView>
                    </Modal>
            </SafeAreaView>
            }
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
    },
    options:{
        marginTop:8,
        justifyContent: 'center',
        box:{
            marginVertical:8,
            justifyContent: 'center',
            alignSelf: 'center',
            width:'80%',
            height:51,
            backgroundColor:'#FFFFFF',
            borderRadius:10,
            text:{
                width:'95%',
                textAlign: 'center',
                alignSelf: 'center',
                color:'#353535',
                fontSize:17
            }
        }
    },
    next:{
        marginTop:5,
        justifyContent:'center',
        alignSelf: 'center',
        width:'50%',
        height:51,
        backgroundColor:'#FF6600',
        borderRadius:10,
        text:{
            //textAlign: 'center',
            alignSelf: 'center',
            color:'#FFFFFF',
            fontSize:16
        }
    },
    containerModal: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        blurRadius: 1
    },
    modal: {
        backgroundColor: '#F6F4F2',
        borderRadius: 30,
        width: '95%',
        height: 325,
        alignItems: 'center',
    },
    modalTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353535',
        marginTop:25
    },
    modalSubTitulo: {
        fontSize: 16,
        fontWeight: 'light',
        color: '#353535',
        marginTop:8
    },
    modalCoins: {
        fontSize: 17,
        fontWeight: 'light',
        color: '#353535',
        marginTop:30
    },
    
})