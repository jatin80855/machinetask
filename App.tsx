import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Dashboard from './src/Screens/Dashboard';
import Splash from './src/Screens/Splash';
import FprgetPas from './src/Screens/FprgetPas';
import otp from './src/Screens/Otp';
import Otp from './src/Screens/Otp';
import Confirmpassword from './src/Screens/Confirmpassword';
import Done from './src/Screens/Done';
import Signup from './src/Screens/Signup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="FprgetPas" component={FprgetPas} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Confirmpassword" component={Confirmpassword} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
