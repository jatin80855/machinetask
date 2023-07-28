import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {bgColor} from '../Components/Color';
import {hp, wp} from '../Components/SizeMAte';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      getToken();
    }, 3000);
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    if (token == null) {
      console.log('usernot login in');
      props.navigation.replace('Login');
    } else {
      console.log('user login in');
      props.navigation.replace('Dashboard');
    }
  };
  return (
    <View
      style={{
        backgroundColor: bgColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Imags/Frame.png')}
        resizeMode="center"
        style={{width: wp(50), height: hp(50)}}
      />
      <Text
        style={{
          color: '#5E9959',
          fontSize: 30,
          fontFamily: 'Poppins-SemiBold',
        }}>
        Splash Screen
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
