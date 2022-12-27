import React from 'react';
import { Text,ScrollView,View,StyleSheet,Image, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Main from './screens/Main';
import Onboarding1 from './screens/Onboarding1';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Onboarding1' component={Onboarding1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
