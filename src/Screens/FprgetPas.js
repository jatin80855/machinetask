import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { wp } from '../Components/SizeMAte'
import TextInputCompnet from '../Components/TextInputCompnet'


const FprgetPas = (props) => {
  return (
    <View style={{backgroundColor:"#FAFDFF",flex:1,paddingHorizontal:15}}>
        <TouchableOpacity onPress={()=>{
            props.navigation.goBack()
        }}>
            <Image source={require("../Imags/arrow-left.png")} resizeMode='contain' style={{width:wp(8),height:wp(8),position:'absolute',top:40}}/>
        </TouchableOpacity>
     <Image source={require('../Imags/Frame.png')} resizeMode='contain' style={{alignSelf:'center',marginTop:20,width:wp(65),height:wp(65)}}/>
   <Text style={{color:"black",fontSize:27,fontFamily:"Poppins-Regular",marginTop:20}}>Forget Password</Text>
        
   <Text style={{color:"#6B6B6B",fontSize:17,fontFamily:"Poppins-Regular"}}>Don’t worry! It happens, Please enter 
the email address associated with
your account.</Text>


<TextInputCompnet
label={"Email Id"} placeholder={"Enter Email Id "}  keyboardType={"email-address"} as={"#B8FFB2"} />
 
 <TouchableOpacity
 onPress={()=>{
    props.navigation.navigate("Otp")
 }}
      
        style={{
          backgroundColor: '#5DE750',
          alignSelf: 'center',
          paddingVertical: 3,
          paddingHorizontal: 40,
          borderRadius: 100,
          marginTop: 40,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <Text
          style={{color: 'white', fontSize: 23, fontFamily: 'Poppins-Medium'}}>
       Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FprgetPas

const styles = StyleSheet.create({})