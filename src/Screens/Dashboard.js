import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { cloneElement, createRef, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hp, wp } from '../Components/SizeMAte';


const Dashboard = (props) => {
  useEffect(() => {
    getdata();
  }, [])
  
const [data, setData] = useState("")
  const getdata = async ()=>{
    const jatin = await AsyncStorage.getItem("All")
    setData(JSON.parse(jatin))
  }
  console.log(data)

    const LogOutFunction = async () => {
        await AsyncStorage.clear();
        props.navigation.replace('Login');
      };


  
    
  return (
    <View style={{backgroundColor:"#FFFFFF",flex:1,paddingHorizontal:20}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

     



    <TouchableOpacity onPress={LogOutFunction}>
        <Image source={require('../Imags/logout.png')} resizeMode='contain' style={{width:wp(8),height:hp(8),marginTop:3,position:'absolute',right:10}}/>
    </TouchableOpacity>
       

<Text style={{color:"black",fontSize:18,marginTop:20}}>First Name:{data.name}</Text>
<Text style={{color:"black",fontSize:18,marginTop:20}}>Last Name:{data.lastname}</Text>
<Text style={{color:"black",fontSize:18,marginTop:20}}>Email:{data.emaila}</Text>
<Text style={{color:"black",fontSize:18,marginTop:20}}>Number:{data.numer}</Text>




    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})